# 

Source: https://proofwiki.org/wiki/Products_of_Repdigit_Numbers


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Fun Fact
Professor Stewart opens a mathematical miscellany with this delightful series:














\(\ds \paren {8 \times 8} + 13\)

\(=\)







\(\ds 77\)




















\(\ds \paren {88 \times 8} + 13\)

\(=\)







\(\ds 717\)




















\(\ds \paren {888 \times 8} + 13\)

\(=\)







\(\ds 7117\)




















\(\ds \paren {8888 \times 8} + 13\)

\(=\)







\(\ds 71117\)




















\(\ds \paren {88888 \times 8} + 13\)

\(=\)







\(\ds 711117\)




















\(\ds \paren {888888 \times 8} + 13\)

\(=\)







\(\ds 7111117\)









and so on.


Exploration
If we use the technique of long multiplication on that last line, we will be able to see the pattern:

 888888
x     8
-------
     64
    640
   6400
  64000
 640000
6400000
-------
7111104
-------

All we have to do is add a final $13$ to make the final number symmetrical.

A little experimentation shows that this sort of thing happens whatever digits you care to choose, for example:














\(\ds \paren {7 \times 6} + 2\)

\(=\)







\(\ds 44\)




















\(\ds \paren {77 \times 6} + 2\)

\(=\)







\(\ds 464\)




















\(\ds \paren {777 \times 6} + 2\)

\(=\)







\(\ds 4664\)




















\(\ds \paren {7777 \times 6} + 2\)

\(=\)







\(\ds 46664\)




















\(\ds \paren {77777 \times 6} + 2\)

\(=\)







\(\ds 466664\)




















\(\ds \paren {777777 \times 6} + 2\)

\(=\)







\(\ds 4666664\)









and so on.

You can do this trick in any number base, for example:














\(\ds \paren {6_8 \times 6_8} + 11_8\)

\(=\)







\(\ds 55_8\)




















\(\ds \paren {66_8 \times 6_8} + 11_8\)

\(=\)







\(\ds 515_8\)




















\(\ds \paren {666_8 \times 6_8} + 11_8\)

\(=\)







\(\ds 5115_8\)




















\(\ds \paren {6666_8 \times 6_8} + 11_8\)

\(=\)







\(\ds 51115_8\)




















\(\ds \paren {66666_8 \times 6_8} + 11_8\)

\(=\)







\(\ds 511115_8\)




















\(\ds \paren {666666_8 \times 6_8} + 11_8\)

\(=\)







\(\ds 5111115_8\)









and so on.


Analysis
Let us pick two digits $r, s$ and a base $b$ such that $r, s < b$.
We can express a repdigit number $\sqbrk {rrr \ldots rrr}_b$ to any base $b$ as:

$\ds \sqbrk {rrr \ldots rrr}_b = \sum_{k \mathop = 0}^n r b^k$
Thus:














\(\ds \sqbrk {rrr \ldots rrr}_b \times s\)

\(=\)







\(\ds s \sum_{k \mathop = 0}^n r b^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n r s b^k\)









Let $p = r s$.

There are two cases to consider here.

$(1) \quad$ Suppose $p < b$. Then:

$\sqbrk {rrr \ldots rrr}_b \times s = \sqbrk {ppp \ldots ppp}_b$
and the pattern is obvious and boring.
An example here (using conventional decimal notation):














\(\ds \paren {2 \times 3} + 0\)

\(=\)







\(\ds 6\)




















\(\ds \paren {22 \times 3} + 0\)

\(=\)







\(\ds 66\)




















\(\ds \paren {222 \times 3} + 0\)

\(=\)







\(\ds 666\)




















\(\ds \paren {2222 \times 3} + 0\)

\(=\)







\(\ds 6666\)




















\(\ds \paren {22222 \times 3} + 0\)

\(=\)







\(\ds 66666\)




















\(\ds \paren {222222 \times 3} + 0\)

\(=\)







\(\ds 666666\)









and so on.

$(2) \quad$ Now suppose $p \ge b$.
Note that $p < b^2$ as both $r < b, s < b$.
So we can express $p$ as $p = p_1 b + p_2$.
So:














\(\ds \sqbrk {rrr \ldots rrr}_b \times s\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n p b^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {p_1 b + p_2} b^k\)




















\(\ds \)

\(=\)







\(\ds p_1 b^{n + 1} + \sum_{k \mathop = 1}^n \paren {p_1 + p_2} b^k + p_2\)









Let $p_1 + p_2 = q$.

Again, there are two cases to consider:

$(2a) \quad$ Suppose $q < b$. Then:

$\sqbrk {rrr \ldots rrr}_b \times s = \sqbrk {p_1 qqq \ldots qqq p_2}_b$
All we need to do is to add (or subtract) the difference between $p_1$ and $p_2$, and we get:

$\sqbrk {rrr \ldots rrr}_b \times s + \paren {p_1 - p_2} = \sqbrk {p_1 qqq \ldots qqq p_1}_b$

An example here (using conventional decimal notation):














\(\ds \paren {6 \times 4} - 2\)

\(=\)







\(\ds 22\)




















\(\ds \paren {66 \times 4} - 2\)

\(=\)







\(\ds 262\)




















\(\ds \paren {666 \times 4} - 2\)

\(=\)







\(\ds 2662\)




















\(\ds \paren {6666 \times 4} - 2\)

\(=\)







\(\ds 26662\)




















\(\ds \paren {66666 \times 4} - 2\)

\(=\)







\(\ds 266662\)




















\(\ds \paren {666666 \times 4} - 2\)

\(=\)







\(\ds 2666662\)









and so on.

$(2b) \quad$ Suppose $q \ge b$.
Then from the Division Theorem $q$ can be expressed as $q' b + t$ where $0 \le t < b$.
We have that $p_1, p_2 < b$ so $q = p_1 + p_2 < 2 b$, so it immediately follows that $q' = 1$.
It can also be seen that $t < b - 1$ and so (this is important in a bit) $t + 1 < b$.
Similarly we can see that $p_1 < b - 1$ and so (similarly important in a bit) $p_1 + 1 < b$.
So $q = b + t$, and so:














\(\ds \sqbrk {rrr \ldots rrr}_b \times s\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n p b^k\)




















\(\ds \)

\(=\)







\(\ds p_1 b^{n + 1} + \sum_{k \mathop = 1}^n \paren {p_1 + p_2} b^k + p_2\)




















\(\ds \)

\(=\)







\(\ds p_1 b^{n + 1} + \sum_{k \mathop = 1}^n \paren {b + t} b^k + p_2\)




















\(\ds \)

\(=\)







\(\ds \paren {p_1 + 1} b^{n + 1} + \sum_{k \mathop = 2}^n \paren {t + 1} b^k + t b + p_2\)









Putting $p_1 + 1 = p_3$ and $u = t + 1$, and noting that from above $u < b$, we have: 

$\sqbrk {rrr \ldots rrr}_b \times s = \sqbrk {p_3 uuu \ldots uu t p_2}_b$
The final step is to calculate the difference between $\sqbrk {p_3 uuu \ldots uu t p_2}_b$ and $\sqbrk {p_3 uuu \ldots uuu p_3}_b$ in order to form a symmetrical pattern.
An example of this case is the $888 \ldots 88 \times 8 + 13 = 7111 \ldots 1117$ given at the start of this page.
$\blacksquare$


Sources
2009: Ian Stewart: Professor Stewart's Hoard of Mathematical Treasures: Calculator Curiosity 1




