# 

Source: https://proofwiki.org/wiki/Natural_Logarithm_of_2_is_Greater_than_One_Half/Proof_1

Lemma
$\ln 2 \ge \dfrac 1 2$
where $\ln$ denotes the natural logarithm function.


Proof
Let $f: \R_{>0} \to \R$ be the real function defined as:

$\forall x \in \R_{>0}: \map f x = \dfrac 1 x$
From Real Rational Function is Continuous, $\map f x$ is a continuous real function, in particular on the closed interval $\closedint a b$.

Hence the Mean Value Theorem for Integrals can be applied:
There exists some $k \in \closedint 1 2$ such that:














\(\ds \int_1^2 \map f x \rd x\)

\(=\)







\(\ds \map f k \paren {2 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \int_1^2 \frac 1 x \rd x\)

\(=\)







\(\ds \frac 1 k \paren {2 - 1}\)





substituting $\dfrac 1 x$ for $\map f x$








\(\ds \leadsto \ \ \)





\(\ds \ln 2 - \ln 1\)

\(=\)







\(\ds \frac 1 k \paren {2 - 1}\)





Definition 1 of Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds \ln 2\)

\(=\)







\(\ds \frac 1 k\)





Logarithm of $1$ is $0$




Thus:














\(\ds 1\)

\(\le\)

\(\, \ds k \, \)

\(\, \ds \le \, \)



\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds 1^{-1}\)

\(\ge\)

\(\, \ds k^{-1} \, \)

\(\, \ds \ge \, \)



\(\ds 2^{-1}\)





Ordering of Reciprocals








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\ge\)

\(\, \ds \ln 2 \, \)

\(\, \ds \ge \, \)



\(\ds \frac 1 2\)









$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): Appendix $A$: Properties of the Natural Logarithmic Function




