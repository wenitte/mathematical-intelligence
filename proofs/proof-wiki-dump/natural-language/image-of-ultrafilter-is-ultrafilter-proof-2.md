# 

Source: https://proofwiki.org/wiki/Image_of_Ultrafilter_is_Ultrafilter/Proof_2

Theorem
Let $X, Y$ be sets.
Let $f: X \to Y$ be a mapping.
Let $\FF$ be an ultrafilter on $X$.

Then the image filter $f \sqbrk \FF$ is an ultrafilter on $Y$.


Proof
From Image Filter is Filter, we have that $\FF$ is a filter on $Y$.
In view of definition of ultrafilter, we need to show that:

for every $A \subseteq Y$, either $A \in f \sqbrk \FF$ or $\relcomp Y A \in f \sqbrk \FF$

Let $A \subseteq Y$ be arbitrary.
Suppose $A \not \in f \sqbrk \FF$.
Then, by definition of image filter:

$f^{-1} \sqbrk A \not \in \FF$
By definition of ultrafilter:

$\relcomp X {f^{-1} \sqbrk A} \in \FF$
As Complement of Preimage equals Preimage of Complement:

$\relcomp X {f^{-1} \sqbrk A} = f^{-1} \sqbrk {\relcomp Y A}$
Thus:

$f^{-1} \sqbrk {\relcomp Y A} \in \FF$
That is, by definition of image filter:

$\relcomp Y A \in f \sqbrk \FF$
$\blacksquare$





