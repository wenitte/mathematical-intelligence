# 

Source: https://proofwiki.org/wiki/Pandigital_Sum_whose_Components_are_Multiples

Theorem
The following sums use each of the digits $1$ to $9$ exactly once each, while one summand equals $2$ times the other summand:














\(\ds 192 + 384\)

\(=\)







\(\ds 576\)





where $2 \times 192 = 384$ and so $3 \times 192 = 576$














\(\ds 219 + 438\)

\(=\)







\(\ds 657\)





where $2 \times 219 = 438$ and so $3 \times 219 = 657$














\(\ds 273 + 546\)

\(=\)







\(\ds 819\)





where $2 \times 273 = 546$ and so $3 \times 273 = 819$














\(\ds 327 + 654\)

\(=\)







\(\ds 981\)





where $2 \times 327 = 654$ and so $3 \times 327 = 981$



This sequence is A039667 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

It is interesting to note how the $4$ sums can be divided into two pairs in which each element of the sum is an anagram of its corresponding element in the other.


Proof
We establish some parameters for the number $x$ such that the equation $x + 2 x = 3 x$ is pandigital.
Firstly, among the three numbers, there cannot be repeating digits or $0$.
If $5 \divides x$:

$10 \divides 2 x$ and $2 x$ ends in $0$.
By Divisibility by 5, $x$ cannot end in $5$.

Secondly, $x$ must be divisible by $3$.
To see this, consider the concatenation of the three numbers, $\sqbrk {x || 2 x || 3 x}$.
Since the digits of this number is a permutation of $\set {1, \dots, 9}$, they sum to $45$.
Since $9 \divides 45$, by Divisibility by 9:

$9 \divides \sqbrk {x || 2 x || 3 x}$
We have:














\(\ds \sqbrk {x \vert \vert 2 x \vert \vert 3 x}\)

\(=\)







\(\ds 10^6 x + 10^3 \paren {2 x} + 3 x\)




















\(\ds \)

\(\equiv\)







\(\ds x + 2 x + 3 x\)

\(\ds \pmod 9\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 6 x\)

\(\ds \pmod 9\)







Hence $9 \divides 6 x$.
This gives $3 \divides 2 x$.
By Euclid's Lemma:

$3 \divides x$

Finally, as $3 x < 1000$, we must have $100 \le x \le 333$.
Putting repeating digits and zeroes into consideration, we list and check all possible candidates from $123$ to $327$:








\(\ds 12X: \ \ \)





\(\ds 12X \times 2\)

\(=\)







\(\ds 2XX\)





$2$ is repeated








\(\ds 132: \ \ \)





\(\ds 132 \times 2\)

\(=\)







\(\ds 264\)





$2$ is repeated








\(\ds 138: \ \ \)





\(\ds 138 \times 3\)

\(=\)







\(\ds 414\)





$4$ is repeated








\(\ds 147: \ \ \)





\(\ds 147 \times 2\)

\(=\)







\(\ds 294\)





$4$ is repeated








\(\ds 153: \ \ \)





\(\ds 153 \times 2\)

\(=\)







\(\ds 306\)





$3$ is repeated








\(\ds 156: \ \ \)





\(\ds 156 \times 2\)

\(=\)







\(\ds 312\)





$1$ is repeated








\(\ds 159: \ \ \)





\(\ds 159 \times 2\)

\(=\)







\(\ds 318\)





$1$ is repeated








\(\ds 162: \ \ \)





\(\ds 162 \times 2\)

\(=\)







\(\ds 324\)





$2$ is repeated








\(\ds 168: \ \ \)





\(\ds 168 \times 2\)

\(=\)







\(\ds 336\)





$3, 6$ are repeated








\(\ds 174: \ \ \)





\(\ds 174 \times 2\)

\(=\)







\(\ds 348\)





$4$ is repeated








\(\ds 183: \ \ \)





\(\ds 183 \times 2\)

\(=\)







\(\ds 366\)





$3, 6$ are repeated








\(\ds 186: \ \ \)





\(\ds 186 \times 3\)

\(=\)







\(\ds 558\)





$5, 8$ are repeated








\(\ds 189: \ \ \)





\(\ds 189 \times 2\)

\(=\)







\(\ds 378\)





$8$ is repeated








\(\ds 192: \ \ \)





\(\ds 192 + 384\)

\(=\)







\(\ds 576\)





is the $1$st solution








\(\ds 198: \ \ \)





\(\ds 198 \times 2\)

\(=\)







\(\ds 396\)





$9$ is repeated








\(\ds 213: \ \ \)





\(\ds 213 \times 2\)

\(=\)







\(\ds 426\)





$2$ is repeated








\(\ds 216: \ \ \)





\(\ds 216 \times 2\)

\(=\)







\(\ds 432\)





$2$ is repeated








\(\ds 219: \ \ \)





\(\ds 219 + 438\)

\(=\)







\(\ds 657\)





is the $2$nd solution








\(\ds 231: \ \ \)





\(\ds 231 \times 2\)

\(=\)







\(\ds 462\)





$2$ is repeated








\(\ds 234: \ \ \)





\(\ds 234 \times 2\)

\(=\)







\(\ds 468\)





$4$ is repeated








\(\ds 237: \ \ \)





\(\ds 237 \times 2\)

\(=\)







\(\ds 474\)





$4, 7$ are repeated








\(\ds 24X: \ \ \)





\(\ds 24X \times 2\)

\(=\)







\(\ds 4XX\)





$4$ is repeated








\(\ds 258: \ \ \)





\(\ds 258 \times 2\)

\(=\)







\(\ds 516\)





$5$ is repeated








\(\ds 261: \ \ \)





\(\ds 261 \times 2\)

\(=\)







\(\ds 522\)





$2$ is repeated








\(\ds 264: \ \ \)





\(\ds 264 \times 2\)

\(=\)







\(\ds 528\)





$2$ is repeated








\(\ds 267: \ \ \)





\(\ds 267 \times 3\)

\(=\)







\(\ds 801\)





$0$ is used








\(\ds 273: \ \ \)





\(\ds 273 + 546\)

\(=\)







\(\ds 819\)





is the $3$rd solution








\(\ds 276: \ \ \)





\(\ds 276 \times 2\)

\(=\)







\(\ds 552\)





$2, 5$ are repeated








\(\ds 279: \ \ \)





\(\ds 279 \times 3\)

\(=\)







\(\ds 837\)





$7$ is repeated








\(\ds 291: \ \ \)





\(\ds 291 \times 2\)

\(=\)







\(\ds 582\)





$2$ is repeated








\(\ds 294: \ \ \)





\(\ds 294 \times 2\)

\(=\)







\(\ds 588\)





$8$ is repeated








\(\ds 297: \ \ \)





\(\ds 297 \times 2\)

\(=\)







\(\ds 594\)





$9$ is repeated








\(\ds 312: \ \ \)





\(\ds 312 \times 2\)

\(=\)







\(\ds 624\)





$2$ is repeated








\(\ds 318: \ \ \)





\(\ds 318 \times 2\)

\(=\)







\(\ds 636\)





$3, 6$ are repeated








\(\ds 321: \ \ \)





\(\ds 321 \times 2\)

\(=\)







\(\ds 642\)





$2$ is repeated








\(\ds 324: \ \ \)





\(\ds 324 \times 2\)

\(=\)







\(\ds 648\)





$4$ is repeated








\(\ds 327: \ \ \)





\(\ds 327 + 654\)

\(=\)







\(\ds 981\)





is the $4$th solution



Hence the result.
$\blacksquare$


Sources
1995: David Breyer Singmaster: Determination of all pan-digital sums with two summands (Journal of Recreational Mathematics Vol. 27, no. 3: p. 183)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $192$




