# React Native Rating List

### Horizontal list that display your rating content without any hassle.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Props](#props)
4. [Output](#output)

## Installation

`npm i react-native-rating-list`

## Usage

```
import RatingList from 'react-native-rating-list';

.........

 <RatingList
    header="You might want to see this"
    items={suggestions}
    defaultUrl="https://watchnow.com/movies/1"
  />
```

### Props

| Prop | Type | Description | Required
|---|---|---|---|
|**`header`**|string| Name of the list, just put any string, let empty if not used|No
|**`items`**|array|Array of items include: \n id \n title \n category \n image \n rating |Yes
|**`defaultUrl`**|string| Default URL when user click on items |No
|**`scrollViewHeight`**|int|the height of the ScrollView, due to its character is in vertical|No


## Output
![cinemaapp](https://i.ibb.co/C9PTnBy/Example.png)
