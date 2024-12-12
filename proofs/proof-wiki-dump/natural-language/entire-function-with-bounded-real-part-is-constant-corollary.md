# 

Source: https://proofwiki.org/wiki/Entire_Function_with_Bounded_Real_Part_is_Constant/Corollary

Corollary
Let $f : \C \to \C$ be an entire function. 
Let the imaginary part of $f$ be bounded.
That is, there exists a positive real number $M$ such that: 

$\cmod {\map \Im {\map f z} } < M$
for all $z \in \C$, where $\map \Im {\map f z}$ denotes the imaginary part of $\map f z$.

Then $f$ is constant.


Proof
Since $\cmod i = 1$, $i f$ is bounded.
From Combination Theorem for Complex Derivatives: Multiple Rule, $i f$ is entire. 
From Real Part of Imaginary Unit times Element of *-Algebra, we have:

$\cmod {\map \Re {i \map f z} } = \cmod {\map \Im {\map f z} } < M$
From Entire Function with Bounded Real Part is Constant, there exists $c \in \C$ such that $i \map f z = c$.
Hence $\map f z = -i c$.
So $f$ is constant.
$\blacksquare$





