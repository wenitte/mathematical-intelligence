# 

Source: https://proofwiki.org/wiki/Ordering_on_1-Based_Natural_Numbers_is_Transitive

Theorem
Let $\N_{> 0}$ be the $1$-based natural numbers.
Let $<$ be the strict ordering on $\N_{>0}$.

Then $<$ is a transitive relation.


Proof
Let $a < b$ and $b < c$.
Then:










\(\ds \exists x \in \N_{> 0}: \, \)



\(\ds a + x\)

\(=\)







\(\ds b\)














\(\ds \land \ \ \)

\(\ds \exists y \in \N_{> 0}: \, \)



\(\ds b + y\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a + x} + y\)

\(=\)







\(\ds c\)





substituting $a + x$ for $b$








\(\ds \leadsto \ \ \)





\(\ds a + \paren {x + y}\)

\(=\)







\(\ds c\)





Natural Number Addition is Associative








\(\ds \leadsto \ \ \)





\(\ds a\)

\(<\)







\(\ds c\)





as $x + y \in \N_{> 0}$



$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $2.2$: Theorem $2.9$




