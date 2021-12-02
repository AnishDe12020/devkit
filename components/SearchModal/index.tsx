import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  useDisclosure,
  useEventListener,
  Flex,
  Button,
} from "@chakra-ui/react";
import tools from "@/data/tools";
import Fuse from "fuse.js";
import { useState, useEffect, ChangeEvent, KeyboardEventHandler } from "react";
import ResultLink from "@/components/SearchModal/ResultLink";
import router from "next/router";
import { FiSearch } from "react-icons/fi";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [activeSearchResultIndex, setActiveSearchResultIndex] =
    useState<number>(0);

  useEventListener("keydown", e => {
    if (e.key.toLowerCase() === "k" && e.ctrlKey) {
      e.preventDefault();
      isOpen ? onClose() : onOpen();
    }
  });

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key.toLowerCase() === "enter") {
      e.preventDefault();
      console.log(searchResults[activeSearchResultIndex]);
      const activeResultItem = searchResults[activeSearchResultIndex].item;

      console.log(activeResultItem);

      router.push(`${activeResultItem.categorySlug}/${activeResultItem.slug}`);
      onClose();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (activeSearchResultIndex > 0) {
        setActiveSearchResultIndex(activeSearchResultIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (activeSearchResultIndex < searchResults.length - 1) {
        setActiveSearchResultIndex(activeSearchResultIndex + 1);
      }
    }
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fuse = new Fuse(tools, {
      keys: ["name", "slug", "description"],
    });

    const results = fuse.search(query);

    const resultsWithIndex = results.map((item, index) => {
      return {
        ...item,
        index,
      };
    });

    setSearchResults(resultsWithIndex);
  }, [query]);

  return (
    <>
      <Button onClick={onOpen}>
        <FiSearch />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Input
              value={query}
              onChange={handleQueryChange}
              onKeyDown={handleKeyDown}
            />
            <Flex direction="column" mt={2}>
              {searchResults.length > 0 &&
                searchResults.map(tool => (
                  <ResultLink
                    href={`${tool.item.categorySlug}/${tool.item.slug}`}
                    key={tool.refIndex}
                    onClose={onClose}
                    active={activeSearchResultIndex === tool.index}
                  >
                    {tool.item.name}
                  </ResultLink>
                ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
