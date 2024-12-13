# 

Source: https://proofwiki.org/wiki/Difference_between_Two_Squares_equal_to_Repunit



Theorem
The sequence of differences of two squares that each make a repunit begins:














\(\ds 1^2 - 0^2\)

\(=\)







\(\ds 1\)




















\(\ds 6^2 - 5^2\)

\(=\)







\(\ds 11\)




















\(\ds 20^2 - 17^2\)

\(=\)







\(\ds 111\)




















\(\ds 56^2 - 45^2\)

\(=\)







\(\ds 1111\)




















\(\ds 56^2 - 55^2\)

\(=\)







\(\ds 111\)




















\(\ds 156^2 - 115^2\)

\(=\)







\(\ds 11 \, 111\)




















\(\ds 340^2 - 67^2\)

\(=\)







\(\ds 111 \, 111\)




















\(\ds 344^2 - 65^2\)

\(=\)







\(\ds 111 \, 111\)




















\(\ds 356^2 - 125^2\)

\(=\)







\(\ds 111 \, 111\)











Corollary 1













\(\ds 6^2 - 5^2\)

\(=\)







\(\ds 11\)




















\(\ds 56^2 - 45^2\)

\(=\)







\(\ds 1111\)




















\(\ds 556^2 - 445^2\)

\(=\)







\(\ds 111 \, 111\)




















\(\ds \)

\(:\)







\(\ds \)









and in general for integer $n$:

$R_{2 n} = {\underbrace {55 \ldots 56}_{\text {$n - 1$ $5$'s} } }^2 - {\underbrace {44 \ldots 45}_{\text {$n - 1$ $4$'s} } }^2$
that is:

$\ds \sum_{k \mathop = 0}^{2 n - 1} 10^k = \paren {\sum_{k \mathop = 1}^{n - 1} 5 \times 10^k + 6}^2 - \paren {\sum_{k \mathop = 1}^{n - 1} 4 \times 10^k + 5}^2$


Corollary 2













\(\ds 6^2 - 5^2\)

\(=\)







\(\ds 11\)




















\(\ds 56^2 - 45^2\)

\(=\)







\(\ds 1111\)




















\(\ds 5056^2 - 5045^2\)

\(=\)







\(\ds 111 \, 111\)




















\(\ds \)

\(:\)







\(\ds \)









and in general for integer $n$:

$R_{2 n} = {\underbrace{5050 \ldots 56}_{n - 1 \ 5 \text{'s} } }^2 - {\underbrace{5050 \ldots 45}_{n - 1 \ 5 \text{'s} } }^2$
that is:

$\ds \sum_{k \mathop = 0}^{2 n - 1} 10^k = \left({\sum_{k \mathop = 1}^{n - 1} 5 \times 10^{2 k - 1} + 6}\right)^2 - \left({\sum_{k \mathop = 1}^{n - 1} 5 \times 10^{2 k - 1} - 5}\right)^2$


Proof
Let $x^2 - y^2 = R_n$ for some $n$, where $R_n$ denotes the $n$-digit repunit.
From Integer as Difference between Two Squares:

$R_n$ has at least two distinct divisors of the same parity that multiply to $R_n$.
Then from Difference of Two Squares:

$x = \dfrac {a + b} 2$
$y = \dfrac {a - b} 2$
where:

$R_n = a b$
for all $a, b$ where:

$a b = R_n$
$a$ and $b$ are of the same parity.
Here we have that $R_n$ is odd.
So both $a$ and $b$ are always odd and therefore always of the same parity.

It remains to perform the calculations and evaluate the examples.


Examples
Repunit $R_1$













\(\ds 1\)

\(=\)







\(\ds 1 \times 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1 + 1} 2\)

\(=\)







\(\ds 1\)




















\(\ds \frac {1 - 1} 2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 1^2 - 0^2\)

\(=\)







\(\ds 1\)









$\blacksquare$


Repunit $R_2$
We have that $11$ is a prime.














\(\ds 11\)

\(=\)







\(\ds 1 \times 11\)














\(\ds \leadsto \ \ \)





\(\ds \frac {11 + 1} 2\)

\(=\)







\(\ds 6\)




















\(\ds \frac {11 - 1} 2\)

\(=\)







\(\ds 5\)














\(\ds \leadsto \ \ \)





\(\ds 6^2 - 5^2\)

\(=\)







\(\ds 36 - 25\)




















\(\ds \)

\(=\)







\(\ds 11\)









$\blacksquare$


Repunit $R_3$
We have that:














\(\ds 111\)

\(=\)







\(\ds 3 \times 37\)




















\(\ds 111\)

\(=\)







\(\ds 1 \times 111\)
























\(\ds 111\)

\(=\)







\(\ds 111 \times 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {111 + 1} 2\)

\(=\)







\(\ds 56\)




















\(\ds \frac {111 - 1} 2\)

\(=\)







\(\ds 55\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 56^2 - 55^2\)




















\(\ds \)

\(=\)







\(\ds 3136 - 3025\)




















\(\ds \)

\(=\)







\(\ds 111\)
























\(\ds 111\)

\(=\)







\(\ds 37 \times 3\)














\(\ds \leadsto \ \ \)





\(\ds \frac {37 + 3} 2\)

\(=\)







\(\ds 20\)




















\(\ds \frac {37 - 3} 2\)

\(=\)







\(\ds 17\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 20^2 - 17^2\)




















\(\ds \)

\(=\)







\(\ds 400 - 289\)




















\(\ds \)

\(=\)







\(\ds 111\)









$\blacksquare$


Repunit $R_4$
We have that:














\(\ds 1111\)

\(=\)







\(\ds 101 \times 11\)




















\(\ds 1111\)

\(=\)







\(\ds 1 \times 1111\)
























\(\ds 1111\)

\(=\)







\(\ds 1111 \times 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1111 + 1} 2\)

\(=\)







\(\ds 556\)




















\(\ds \frac {1111 - 1} 2\)

\(=\)







\(\ds 555\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 556^2 - 555^2\)




















\(\ds \)

\(=\)







\(\ds 309 \, 136 - 308 \, 025\)




















\(\ds \)

\(=\)







\(\ds 1111\)
























\(\ds 1111\)

\(=\)







\(\ds 101 \times 11\)














\(\ds \leadsto \ \ \)





\(\ds \frac {101 + 11} 2\)

\(=\)







\(\ds 56\)




















\(\ds \frac {101 - 11} 2\)

\(=\)







\(\ds 45\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 56^2 - 45^2\)




















\(\ds \)

\(=\)







\(\ds 3136 - 2025\)




















\(\ds \)

\(=\)







\(\ds 1111\)









$\blacksquare$


Repunit $R_5$
We have that:














\(\ds 11 \, 111\)

\(=\)







\(\ds 41 \times 271\)




















\(\ds 11 \, 111\)

\(=\)







\(\ds 1 \times 11 \, 111\)
























\(\ds 11 \, 111\)

\(=\)







\(\ds 11 \, 111 \times 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {11 \, 111 + 1} 2\)

\(=\)







\(\ds 5556\)




















\(\ds \frac {11 \, 111 - 1} 2\)

\(=\)







\(\ds 5555\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 5556^2 - 5555^2\)




















\(\ds \)

\(=\)







\(\ds 30 \, 869 \, 136 - 30 \, 858 \, 025\)




















\(\ds \)

\(=\)







\(\ds 11 \, 111\)
























\(\ds 11 \, 111\)

\(=\)







\(\ds 271 \times 41\)














\(\ds \leadsto \ \ \)





\(\ds \frac {271 + 41} 2\)

\(=\)







\(\ds 156\)




















\(\ds \frac {271 - 41} 2\)

\(=\)







\(\ds 115\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 156^2 - 115^2\)




















\(\ds \)

\(=\)







\(\ds 24 \, 336 - 13 \, 225\)




















\(\ds \)

\(=\)







\(\ds 11 \, 111\)









$\blacksquare$


Repunit $R_6$
We have that:

$111 \, 111 = 3 \times 7 \times 11 \times 13 \times 37$
So, from $\sigma_0$ of $111 \, 111$, there are $32$ divisors of $111 \, 111$, which can be grouped in $16$ pairs.
Each of these will generate a Difference between Two Squares equal to $111 \, 111$.

Hence:














\(\ds 111 \, 111\)

\(=\)







\(\ds 1 \times 111 \, 111\)




















\(\ds \)

\(=\)







\(\ds 3 \times 37 \, 037\)




















\(\ds \)

\(=\)







\(\ds 7 \times 15 \, 873\)




















\(\ds \)

\(=\)







\(\ds 11 \times 10 \, 101\)




















\(\ds \)

\(=\)







\(\ds 13 \times 8547\)




















\(\ds \)

\(=\)







\(\ds 21 \times 5291\)




















\(\ds \)

\(=\)







\(\ds 33 \times 3367\)




















\(\ds \)

\(=\)







\(\ds 37 \times 3003\)




















\(\ds \)

\(=\)







\(\ds 39 \times 2849\)




















\(\ds \)

\(=\)







\(\ds 77 \times 1443\)




















\(\ds \)

\(=\)







\(\ds 91 \times 1221\)




















\(\ds \)

\(=\)







\(\ds 111 \times 1001\)




















\(\ds \)

\(=\)







\(\ds 143 \times 777\)




















\(\ds \)

\(=\)







\(\ds 231 \times 481\)




















\(\ds \)

\(=\)







\(\ds 259 \times 429\)




















\(\ds \)

\(=\)







\(\ds 273 \times 407\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 111 \, 111 \times 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {111 \, 111 + 1} 2\)

\(=\)







\(\ds 55 \, 556\)




















\(\ds \frac {111 \, 111 - 1} 2\)

\(=\)







\(\ds 55 \, 555\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 55 \, 556^2 - 55 \, 555^2\)




















\(\ds \)

\(=\)







\(\ds 3 \, 086 \, 469 \, 136 - 3 \, 086 \, 358 \, 025\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 37 \, 037 \times 3\)














\(\ds \leadsto \ \ \)





\(\ds \frac {37 \, 037 + 3} 2\)

\(=\)







\(\ds 18 \, 520\)




















\(\ds \frac {37 \, 037 - 3} 2\)

\(=\)







\(\ds 18 \, 517\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 18 \, 520^2 - 18 \, 517^2\)




















\(\ds \)

\(=\)







\(\ds 342 \, 990 \, 400 - 342 \, 879 \, 289\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 15 \, 873 \times 7\)














\(\ds \leadsto \ \ \)





\(\ds \frac {15 \, 873 + 7} 2\)

\(=\)







\(\ds 7940\)




















\(\ds \frac {15 \, 873 - 7} 2\)

\(=\)







\(\ds 7933\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 7940^2 - 7933^2\)




















\(\ds \)

\(=\)







\(\ds 63 \, 043 \, 600 - 62 \, 932 \, 489\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 10 \, 101 \times 11\)














\(\ds \leadsto \ \ \)





\(\ds \frac {10 \, 101 + 11} 2\)

\(=\)







\(\ds 5056\)




















\(\ds \frac {10 \, 101 - 11} 2\)

\(=\)







\(\ds 5045\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 5056^2 - 5045^2\)




















\(\ds \)

\(=\)







\(\ds 25 \, 563 \, 136 - 25 \, 452 \, 025\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 8547 \times 13\)














\(\ds \leadsto \ \ \)





\(\ds \frac {8547 + 13} 2\)

\(=\)







\(\ds 4280\)




















\(\ds \frac {8547 - 13} 2\)

\(=\)







\(\ds 4267\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 4280^2 - 4267^2\)




















\(\ds \)

\(=\)







\(\ds 18 \, 318 \, 400 - 18 \, 207 \, 289\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 5291 \times 21\)














\(\ds \leadsto \ \ \)





\(\ds \frac {5291 + 21} 2\)

\(=\)







\(\ds 2656\)




















\(\ds \frac {5291 - 21} 2\)

\(=\)







\(\ds 2635\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 2656^2 - 2635^2\)




















\(\ds \)

\(=\)







\(\ds 7 \, 054 \, 336 - 6 \, 943 \, 225\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 3367 \times 33\)














\(\ds \leadsto \ \ \)





\(\ds \frac {3367 + 33} 2\)

\(=\)







\(\ds 1700\)




















\(\ds \frac {3367 - 33} 2\)

\(=\)







\(\ds 1667\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 1700^2 - 1667^2\)




















\(\ds \)

\(=\)







\(\ds 2 \, 890 \, 000 - 2 \, 778 \, 889\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 3003 \times 37\)














\(\ds \leadsto \ \ \)





\(\ds \frac {3003 + 37} 2\)

\(=\)







\(\ds 1520\)




















\(\ds \frac {3003 - 37} 2\)

\(=\)







\(\ds 1483\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 1520^2 - 1483^2\)




















\(\ds \)

\(=\)







\(\ds 2 \, 310 \, 400 - 2 \, 199 \, 289\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 2849 \times 39\)














\(\ds \leadsto \ \ \)





\(\ds \frac {2849 + 39} 2\)

\(=\)







\(\ds 1444\)




















\(\ds \frac {2849 - 39} 2\)

\(=\)







\(\ds 1405\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 1444^2 - 1405^2\)




















\(\ds \)

\(=\)







\(\ds 2 \, 085 \, 136 - 1 \, 974 \, 025\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 1443 \times 77\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1443 + 77} 2\)

\(=\)







\(\ds 760\)




















\(\ds \frac {1443 - 77} 2\)

\(=\)







\(\ds 683\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 760^2 - 683^2\)




















\(\ds \)

\(=\)







\(\ds 577 \, 600 - 466 \, 489\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 1221 \times 91\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1221 + 91} 2\)

\(=\)







\(\ds 656\)




















\(\ds \frac {1221 - 91} 2\)

\(=\)







\(\ds 565\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 656^2 - 565^2\)




















\(\ds \)

\(=\)







\(\ds 430 \, 336 - 319 \, 225\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 1001 \times 111\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1001 + 111} 2\)

\(=\)







\(\ds 556\)




















\(\ds \frac {1001 - 111} 2\)

\(=\)







\(\ds 445\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 556^2 - 445^2\)




















\(\ds \)

\(=\)







\(\ds 309 \, 136 - 198 \, 025\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 777 \times 143\)














\(\ds \leadsto \ \ \)





\(\ds \frac {777 + 143} 2\)

\(=\)







\(\ds 460\)




















\(\ds \frac {777 - 143} 2\)

\(=\)







\(\ds 445\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 460^2 - 317^2\)




















\(\ds \)

\(=\)







\(\ds 211 \, 600 - 100 \, 489\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 481 \times 231\)














\(\ds \leadsto \ \ \)





\(\ds \frac {481 + 231} 2\)

\(=\)







\(\ds 356\)




















\(\ds \frac {481 - 231} 2\)

\(=\)







\(\ds 125\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 356^2 - 125^2\)




















\(\ds \)

\(=\)







\(\ds 126 \, 736 - 15 \, 625\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 429 \times 259\)














\(\ds \leadsto \ \ \)





\(\ds \frac {429 + 259} 2\)

\(=\)







\(\ds 344\)




















\(\ds \frac {429 - 259} 2\)

\(=\)







\(\ds 85\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 344^2 - 85^2\)




















\(\ds \)

\(=\)







\(\ds 118 \, 336 - 7225\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)
























\(\ds 111 \, 111\)

\(=\)







\(\ds 407 \times 273\)














\(\ds \leadsto \ \ \)





\(\ds \frac {407 + 273} 2\)

\(=\)







\(\ds 340\)




















\(\ds \frac {407 - 273} 2\)

\(=\)







\(\ds 67\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 340^2 - 67^2\)




















\(\ds \)

\(=\)







\(\ds 115 \, 600 - 4489\)




















\(\ds \)

\(=\)







\(\ds 111 \, 111\)









$\blacksquare$


Repunit $R_7$
We have that:














\(\ds 1 \, 111 \, 111\)

\(=\)







\(\ds 239 \times 4649\)




















\(\ds \)

\(=\)







\(\ds 1 \times 1 \, 111 \, 111\)
























\(\ds 1 \, 111 \, 111\)

\(=\)







\(\ds 1 \, 111 \, 111 \times 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {1 \, 111 \, 111 + 1} 2\)

\(=\)







\(\ds 555 \, 556\)




















\(\ds \frac {1 \, 111 \, 111 - 1} 2\)

\(=\)







\(\ds 555 \, 555\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 555 \, 556^2 - 555 \, 555^2\)




















\(\ds \)

\(=\)







\(\ds 308 \, 642 \, 469 \, 136 - 308 \, 641 \, 358 \, 025\)




















\(\ds \)

\(=\)







\(\ds 1 \, 111 \, 111\)
























\(\ds 1 \, 111 \, 111\)

\(=\)







\(\ds 4649 \times 239\)














\(\ds \leadsto \ \ \)





\(\ds \frac {4649 + 239} 2\)

\(=\)







\(\ds 2444\)




















\(\ds \frac {4649 - 239} 2\)

\(=\)







\(\ds 2205\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 2444^2 - 2205^2\)




















\(\ds \)

\(=\)







\(\ds 5 \, 973 \, 136 - 4 \, 862 \, 025\)




















\(\ds \)

\(=\)







\(\ds 1 \, 111 \, 111\)









$\blacksquare$


Sources
Dec. 1986: C.B. Lacampagne and J.L. Selfridge: Pairs of Squares with Consecutive Digits (Math. Mag. Vol. 59, no. 5: pp. 270 – 275)  www.jstor.org/stable/2689401
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $111$
Both of the above sources miss the obvious $56^2 - 55^2 = 111$.



