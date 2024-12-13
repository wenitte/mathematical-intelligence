# 

Source: https://proofwiki.org/wiki/Product_with_Repdigit_can_be_Split_into_Parts_which_Add_to_Repdigit



Theorem
Let $n$ be a positive integer with $d_1$ digits.
Let $m$ be a repdigit number with $d_2$ digits such that $d_2 > d_1$.
Let $r$ consist of the result when the rightmost $d_2$ digits of $m n$ is cut off and added to the remaining left hand portion.

Then $r$ is a repdigit number.


Proof
Let $b > 1$ be the base we are working on.
Let $m = \sqbrk {aaa \dots a}_b$.
Let $R = \dfrac m a = \sqbrk {111 \dots 1}_b = \dfrac {b^{d_2} - 1} {b - 1}$.
Let the rightmost $d_2$ digits of $m n$ be $y$ and the remaining left hand portion be $x$.
Then we have:














\(\ds 0\)

\(\equiv\)







\(\ds m n\)

\(\ds \pmod R\)


















\(\ds \)

\(\equiv\)







\(\ds b^{d_2} x + y\)

\(\ds \pmod R\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {\paren {b - 1} R + 1} x + y\)

\(\ds \pmod R\)


















\(\ds \)

\(\equiv\)







\(\ds x + y\)

\(\ds \pmod R\)


















\(\ds \)

\(\equiv\)







\(\ds r\)

\(\ds \pmod R\)







so $r$ is divisible by $R$.

It remains to show that:

$r \le b^{d_2} - 1 = \paren {b - 1} R$
because $\paren {b - 1} R$ is the largest $d_2$-digit integer.
This condition forces $r$ to have $d_2$ digits, so it remains a repdigit number.
Since $r$ is divisible by $R$, this is equivalent to:

$r < b R$
We have:














\(\ds r\)

\(=\)







\(\ds x + y\)




















\(\ds \)

\(<\)







\(\ds b^{d_1} + \paren {b - 1} R\)




















\(\ds \)

\(\le\)







\(\ds b^{d_2 - 1} + \paren {b - 1} R\)





because $d_2 > d_1$














\(\ds \)

\(\le\)







\(\ds R + \paren {b - 1} R\)





because $R$ has $d_2$ digits














\(\ds \)

\(=\)







\(\ds b R\)









Hence the result.
$\blacksquare$


Examples
Product of $894$ with $22 \, 222$













\(\ds 894 \times 22 \, 222\)

\(=\)







\(\ds 19 \, 866 \, 468\)




















\(\ds 198 + 66  \, 468\)

\(=\)







\(\ds 66 \, 666\)











Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $6666$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $6666$




