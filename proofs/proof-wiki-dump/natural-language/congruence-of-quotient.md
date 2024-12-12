# 

Source: https://proofwiki.org/wiki/Congruence_of_Quotient



Theorem
Let $a, b \in \Z$ and $n \in \N$.
Let $a$ be congruent to $b$ modulo $n$, that is $a \equiv b \pmod n$.
Let $d \in \Z: d > 0$ such that $d$ is a common divisor of $a, b$ and $n$.

Then:

$\dfrac a d \equiv \dfrac b d \pmod {n / d}$


Proof 1
By definition of congruence modulo $n$:

$a = b + k n$
Dividing through by $d$ (which you can do because $d$ divides all three terms), we get:

$\dfrac a d = \dfrac b d + k \dfrac n d$
from which the result follows directly.
$\blacksquare$


Proof 2
From Congruence by Product of Moduli, we have that:

$\dfrac a d \equiv \dfrac b d \pmod {n / d} \iff d \dfrac a d \equiv d \dfrac b d \pmod {n / d} \iff a \equiv b \pmod n$
$\blacksquare$


Examples
Example: $8 \equiv 18 \pmod {10}$













\(\ds 8\)

\(\equiv\)







\(\ds 18\)

\(\ds \pmod {10}\)












\(\ds \leadsto \ \ \)





\(\ds \dfrac 8 2\)

\(\equiv\)







\(\ds \dfrac {18} 2\)

\(\ds \pmod {10 / 2}\)












\(\ds \leadsto \ \ \)





\(\ds 4\)

\(\equiv\)







\(\ds 9\)

\(\ds \pmod 5\)









Example: $6 \equiv 36 \pmod {15}$













\(\ds 6\)

\(\equiv\)







\(\ds 36\)

\(\ds \pmod {15}\)












\(\ds \leadsto \ \ \)





\(\ds \dfrac 6 3\)

\(\equiv\)







\(\ds \dfrac {36} 3\)

\(\ds \pmod {15 / 3}\)












\(\ds \leadsto \ \ \)





\(\ds 2\)

\(\equiv\)







\(\ds 12\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds 6\)

\(\ds \pmod 5\)









Warning
Note that in general it is not the case that:














\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod m\)


















\(\ds c\)

\(\equiv\)







\(\ds d\)

\(\ds \pmod m\)












\(\ds \leadsto \ \ \)





\(\ds \dfrac a c\)

\(\equiv\)







\(\ds \dfrac b d\)










For example:














\(\ds 8\)

\(\equiv\)







\(\ds 18\)

\(\ds \pmod m\)


















\(\ds 27\)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod m\)







But we may not conclude that:

$\dfrac 8 {27} \pmod {10} = \dfrac {18} 7 \pmod {10}$
We may not even conclude that:

$\dfrac 8 2 \pmod {10} = \dfrac {18} 2 \pmod {10}$
because:














\(\ds \dfrac 8 2 \pmod {10}\)

\(\equiv\)







\(\ds 4 \pmod {10}\)




















\(\ds \dfrac {18} 2 \pmod {10}\)

\(\equiv\)







\(\ds 9 \pmod {10}\)




















\(\ds \)

\(\not \equiv\)







\(\ds 4 \pmod {10}\)










But we do have:














\(\ds \dfrac 8 2 \pmod {10 / 2}\)

\(\equiv\)







\(\ds 4 \pmod 5\)




















\(\ds \dfrac {18} 2 \pmod {10 / 2}\)

\(\equiv\)







\(\ds 9 \pmod 5\)




















\(\ds \)

\(\equiv\)







\(\ds 4 \pmod 5\)











Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): congruence modulo $n$ (C.F. Gauss, 1801)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): congruence modulo $n$ (C.F. Gauss, 1801)




