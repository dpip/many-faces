import React, { useState, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { SearchModalContext } from '../../context/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchField from './SearchField';

const SearchModal = () => {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnFocus = () => {
    console.log('focused');
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close">
          <MdClose onClick={() => closeSearchModal()} />
          <SearchField
            value={searchQuery}
            setValue={setSearchQuery}
            onFocus={handleOnFocus}
          />
        </ActionButton>
      </div>
    </SearchModalStyles>
  );
};

export default SearchModal;
