import { View, Text } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const DropDown = () => {
    // 1
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [isDateFocus, setDateFocus] = useState(false);

    return (
        <View>
            <Dropdown
                style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={wareHouseList}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isWareHouseFocus ? wareHouseList[0].label : ''}
                searchPlaceholder="Search..."
                value={wareHouseValue}
                onFocus={() => setWareHouseFocus(true)}
                onBlur={() => setWareHouseFocus(false)}
                onChange={item => {
                    setWareHouseValue(item.value);
                    setWareHouseFocus(false);
                }}
            />
        </View>
    )
}

export default DropDown