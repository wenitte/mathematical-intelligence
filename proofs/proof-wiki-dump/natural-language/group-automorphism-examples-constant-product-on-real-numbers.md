# 

Source: https://proofwiki.org/wiki/Group_Automorphism/Examples/Constant_Product_on_Real_Numbers



Examples of Group Automorphisms
Let $\struct {\R, +}$ denote the real numbers under addition.
Let $\alpha \in \R$ be a real number.

Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \alpha x$
Then $f$ is a (group) automorphism if and only if $\alpha \ne 0$.


Proof
Let $\alpha \in \R$.
We have that:










\(\ds \forall x, y \in \R: \, \)



\(\ds \map f {x + y}\)

\(=\)







\(\ds \alpha \paren {x + y}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \alpha x + \alpha y\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \map f x + \map f y\)





Definition of $f$



Thus $f$ is a (group) homomorphism for all $\alpha \in \R$.


Sufficient Condition
Let $\alpha \in \R$ such that $\alpha \ne 0$.
Then $\dfrac 1 \alpha$ is the multiplicative inverse of $\alpha$ in the field of real numbers $\R$.
We have that:










\(\ds \forall x, y \in \R: \, \)



\(\ds \map f x\)

\(=\)







\(\ds \map f y\)














\(\ds \leadsto \ \ \)





\(\ds \alpha x\)

\(=\)







\(\ds \alpha y\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





multiplying both sides by $\dfrac 1 \alpha$



and so $f$ is injective by definition.
Then we have:










\(\ds \forall x \in \R: \, \)



\(\ds x\)

\(=\)







\(\ds \alpha y\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 \alpha x\)

\(=\)







\(\ds y\)





Definition of $\dfrac 1 \alpha$








\(\ds \leadsto \ \ \)

\(\ds \forall x \in \R: \exists y \in \R: \, \)



\(\ds x\)

\(=\)







\(\ds \map f y\)





Definition of $f$



This demonstrates that $f$ is surjective.
So by definition $f$ is a bijection.
Thus $f$ is an (group) isomorphism from $\R$ to $\R$ and so a (group) automorphism.
$\Box$


Necessary Condition
Let $f$ be a (group) automorphism.
Aiming for a contradiction, suppose $\alpha = 0$.
Then we have:

$\forall x, y \in \R: \map f x = \map f y = 0$
and so $f$ is not injective.
Hence $f$ is not a bijection.
Therefore $f$ is not an automorphism.
Hence by Proof by Contradiction $f$ is not an automorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.4$




