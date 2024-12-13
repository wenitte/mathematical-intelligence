# 

Source: https://proofwiki.org/wiki/Number_which_is_Square_and_Cube_Modulo_7/Proof_1

Theorem
Let $n \in \Z$ be an integer.
Let $n$ be both a square and a cube at the same time.

Then either:

$n \equiv 0 \pmod 7$
or:

$n \equiv 1 \pmod 7$


Proof
Let $n = r^2 = s^3$ for some $r, s \in \Z$.
Then:

$n = \paren {m^2}^3 = \paren {m^3}^2 = m^6$
for some $m \in \Z$

There are $7$ cases to consider:

$(0): \quad m \equiv 0 \pmod 7$: we have $m = 7 k$
$(1): \quad m \equiv 1 \pmod 7$: we have $m = 7 k + 1$
$(2): \quad m \equiv 2 \pmod 7$: we have $m = 7 k + 2$
$(3): \quad m \equiv 3 \pmod 7$: we have $m = 7 k + 3$
$(4): \quad m \equiv 4 \pmod 7$: we have $m = 7 k + 4$
$(5): \quad m \equiv 5 \pmod 7$: we have $m = 7 k + 5$
$(6): \quad m \equiv 6 \pmod 7$: we have $m = 7 k + 6$

Using Congruence of Powers throughout, we make use of:

$x \equiv y \pmod 7 \implies x^j \equiv y^j \pmod 7$
for $j \in \Z_{>0}$.

First the easy cases:




\(\text {(0)}: \quad\)









\(\ds m\)

\(\equiv\)







\(\ds 0 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds m^6\)

\(\equiv\)







\(\ds 0 \pmod 7\)














\(\text {(1)}: \quad\)









\(\ds m\)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds m^6\)

\(\equiv\)







\(\ds 1 \pmod 7\)










It is sufficient to investigate the congruence modulo $7$ of the integers from $2$ to $6$.

We have:




\(\text {(2)}: \quad\)









\(\ds 2^3\)

\(\equiv\)







\(\ds 8 \pmod 7\)




















\(\ds \)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds 2^6\)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\text {(3)}: \quad\)









\(\ds 3^2\)

\(\equiv\)







\(\ds 9 \pmod 7\)




















\(\ds \)

\(\equiv\)







\(\ds 2 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds 3^6 = \paren {3^2}^3\)

\(\equiv\)







\(\ds 1 \pmod 7\)





from $(2)$








\(\text {(4)}: \quad\)









\(\ds 4^2\)

\(\equiv\)







\(\ds 16 \pmod 7\)




















\(\ds \)

\(\equiv\)







\(\ds 2 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds 4^6 = \paren {4^2}^3\)

\(\equiv\)







\(\ds 1 \pmod 7\)





from $(2)$








\(\text {(5)}: \quad\)









\(\ds 5^2\)

\(\equiv\)







\(\ds 25 \pmod 7\)




















\(\ds \)

\(\equiv\)







\(\ds 4 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds 5^6 = \paren {4^2}^3\)

\(\equiv\)







\(\ds 2^3 = 8 \pmod 7\)





from $(4)$














\(\ds \)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\text {(6)}: \quad\)









\(\ds 6^2\)

\(\equiv\)







\(\ds 36 \pmod 7\)




















\(\ds \)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds 6^6 = \paren {6^2}^3\)

\(\equiv\)







\(\ds 1 \pmod 7\)









Hence the result.
$\blacksquare$





