// components/SearchBar.tsx

import React, { FC, useState } from 'react';
import { InputBase, IconButton, Paper, Popover, List, ListItem, ListItemText, ListItemIcon, Switch, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FilterOptions from '../FilterOptions/FilterOptions';  // Adjust the import path as necessary

type FilterOptionType = 'text' | 'expandable' | 'toggle';

interface FilterOption {
  type: FilterOptionType;
  label: string;
  options?: string[];
}

interface SearchBarProps {
  filterOptions?: FilterOption[];
  useFilterAndSorting?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ filterOptions = [], useFilterAndSorting = false }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [nestedAnchorEl, setNestedAnchorEl] = useState<HTMLElement | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    if (useFilterAndSorting) {
      setFilterOpen(true);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNestedAnchorEl(null);
    setFilterOpen(false);
  };

  const handleToggleNested = (event: React.MouseEvent<HTMLElement>) => {
    setNestedAnchorEl(event.currentTarget);
  };

  const handleCloseNested = () => {
    setNestedAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const openNested = Boolean(nestedAnchorEl);

  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton sx={{ p: '10px' }} aria-label="filter" onClick={handleFilterClick}>
          <FilterListIcon />
        </IconButton>
      </Paper>
      {!useFilterAndSorting && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <List>
            {filterOptions.map((option, index) => (
              <React.Fragment key={index}>
                {option.type === 'text' && (
                  <ListItem>
                    <InputBase placeholder={option.label} />
                  </ListItem>
                )}
                {option.type === 'toggle' && (
                  <ListItem>
                    <ListItemText primary={option.label} />
                    <Switch edge="end" />
                  </ListItem>
                )}
                {option.type === 'expandable' && (
                  <>
                    <ListItem button onClick={handleToggleNested}>
                      <ListItemText primary={option.label} />
                      <ArrowRightIcon />
                    </ListItem>
                    <Popover
                      open={openNested}
                      anchorEl={nestedAnchorEl}
                      onClose={handleCloseNested}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      <List>
                        {option.options && option.options.map((nestedOption, nestedIndex) => (
                          <ListItem key={nestedIndex}>
                            <ListItemText primary={nestedOption} />
                          </ListItem>
                        ))}
                      </List>
                    </Popover>
                  </>
                )}
                {index < filterOptions.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Popover>
      )}
      {useFilterAndSorting && (
        <FilterOptions open={filterOpen} onClose={handleClose} />
      )}
    </>
  );
};

export default SearchBar;
