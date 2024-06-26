package com.webcurrency.utils;

import com.webcurrency.models.account.Account;
import com.webcurrency.models.currency.CurrencyType;
import com.webcurrency.models.user.User;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class AccountCreator {
    public static List<Account> createAccountsForNewUser(User user) {
        List<Account> accounts = new ArrayList<>();

        accounts.add(createAccount(user, CurrencyType.RUB, new BigDecimal("100000")));
        accounts.add(createAccount(user, CurrencyType.AED, new BigDecimal("5000")));
        accounts.add(createAccount(user, CurrencyType.CNY, new BigDecimal("5000")));

        return accounts;
    }

    private static Account createAccount(User user, CurrencyType currencyType, BigDecimal initialBalance) {
        return Account.builder()
                .user(user)
                .currencyType(currencyType)
                .balance(initialBalance)
                .build();
    }
}
