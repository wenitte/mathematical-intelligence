# 

Source: https://proofwiki.org/wiki/Group_Isomorphism/Examples/Real_Power_Function



Example of Group Isomorphism
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {\R_{>0}, \times}$ be the multiplicative group of positive real numbers.
Let $\alpha \in \R_{>0}$ be a strictly positive real number.

Let $f: \struct {\R, +} \to \struct {\R_{> 0}, \times}$ be the mapping:

$\forall x \in \R: \map f x = \alpha^x$
where $\alpha^x$ denotes $\alpha$ to the power of $x$.

Then $f$ is a (group) automorphism if and only if $\alpha \ne 1$.


Proof
Let $\alpha \in \R_{>0}$.
We have by definition of power to a real number that:

$\alpha^x = e^{x \ln \alpha}$
From Natural Logarithm of 1 is 0:

$\ln \alpha = 0 \iff \alpha = 1$

First we note that:










\(\ds \forall x, y \in \R: \, \)



\(\ds \map f {x + y}\)

\(=\)







\(\ds \alpha^{x + y}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \alpha^x \times \alpha^y\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \map f x \times \map f y\)





Definition of $f$



Thus $f$ is a (group) homomorphism from $\struct {\R, +}$ to $\struct {\R_{> 0}, \times}$ for all $\alpha \in \R_{>0}$.


Sufficient Condition
Let $\alpha \in \R_{>0}$ such that $\alpha \ne 1$.
We have that:










\(\ds \forall x, y \in \R: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \map f y\)














\(\ds \leadsto \ \ \)





\(\ds \alpha^x\)

\(=\)







\(\ds \alpha^y\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds e^{x \ln \alpha}\)

\(=\)







\(\ds e^{y \ln \alpha}\)





Definition of Power to Real Number








\(\ds \leadsto \ \ \)





\(\ds x \ln \alpha\)

\(=\)







\(\ds y \ln \alpha\)





taking (natural) logarithm of both sides








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





dividing both sides by $\ln \alpha$, as $\ln \alpha \ne 0$



and so $f$ is injective by definition.
Then we have:










\(\ds \forall x \in \R_{>0}: \, \)



\(\ds x\)

\(=\)







\(\ds \alpha^y\)














\(\ds \leadsto \ \ \)





\(\ds \log_\alpha x\)

\(=\)







\(\ds y\)





Definition of General Logarithm








\(\ds \leadsto \ \ \)

\(\ds \forall x \in \R_{>0}: \exists y \in \R: \, \)



\(\ds x\)

\(=\)







\(\ds \map f y\)





Definition of $f$



This demonstrates that $f$ is surjective.
So by definition $f$ is a bijection.
Thus $f$ is an (group) isomorphism from $\struct {\R, +}$ to $\struct {\R_{> 0}, \times}$.
$\Box$


Necessary Condition
Let $f$ be a (group) automorphism.
Aiming for a contradiction, suppose $\alpha = 1$.
Then we have:

$\forall x, y \in \R: \map f x = \map f y = 1$
and so $f$ is not injective.
Hence $f$ is not a bijection.
Therefore $f$ is not an isomorphism.
Hence by Proof by Contradiction $f$ is not an automorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.4$




