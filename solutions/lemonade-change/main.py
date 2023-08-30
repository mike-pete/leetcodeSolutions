def lemonadeChange(bills):
    cost = 5
    denominations = [60, 50, 20, 10, 5]
    cashDrawer = dict.fromkeys(denominations, 0)

    for bill in bills:
        # add bill to till
        cashDrawer[bill] = cashDrawer[bill] + 1

        # calculate change needed
        changeNeeded = bill - cost

        if changeNeeded > 0:
            for denom in denominations:
                while changeNeeded >= denom and cashDrawer[denom] > 0:
                    # hand back bills
                    changeNeeded -= denom
                    cashDrawer[denom] = cashDrawer[denom] - 1
                
        if changeNeeded > 0:
            return False
    
    return True

print(lemonadeChange([5,5,5,5,5,5,5,5,5,5,5,5,5, 10, 60]))
