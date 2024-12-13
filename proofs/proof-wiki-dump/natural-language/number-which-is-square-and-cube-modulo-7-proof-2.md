# 

Source: https://proofwiki.org/wiki/Number_which_is_Square_and_Cube_Modulo_7/Proof_2

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

For $m \equiv 0 \pmod 7$:














\(\ds m\)

\(\equiv\)







\(\ds 0 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds m^6\)

\(\equiv\)







\(\ds 0 \pmod 7\)





Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\equiv\)







\(\ds 0 \pmod 7\)










From Fermat's Little Theorem, we have our prime number $p = 7$.
We also have our $m \in \Z_{>0}$ such that $7$ is not a divisor of $m$.
Then:














\(\ds m^{p - 1}\)

\(\equiv\)







\(\ds 1 \pmod p\)














\(\ds \leadsto \ \ \)





\(\ds m^{7 - 1}\)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds m^6\)

\(\equiv\)







\(\ds 1 \pmod 7\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(\equiv\)







\(\ds 1 \pmod 7\)










Hence the result.
$\blacksquare$





