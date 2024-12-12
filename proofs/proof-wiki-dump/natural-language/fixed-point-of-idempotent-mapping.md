# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Idempotent_Mapping



Theorem
Let $S$ be a set.
Let $f: S \to S$ be an idempotent mapping.
Let $\Img f$ be the image of $f$.
Let $x \in S$.

Then $x$ is a fixed point of $f$ if and only if $x \in \Img f$.


Proof
Necessary Condition
Let $x$ be a fixed point of $f$.
Then:

$\map f x = x$
and so by definition of image of mapping:

$x \in \Img f$
$\Box$


Sufficient Condition
Let $x \in \Img f$.
Then by the definition of image:

$\exists y \in S: \map f y = x$
Then:














\(\ds x\)

\(=\)







\(\ds \map f y\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f {\map f y}\)





Definition of Mapping














\(\ds \)

\(=\)







\(\ds \map f y\)





Definition of Idempotent Mapping














\(\ds \)

\(=\)







\(\ds x\)










Thus by definition $x$ is a fixed point of $f$.
$\blacksquare$





