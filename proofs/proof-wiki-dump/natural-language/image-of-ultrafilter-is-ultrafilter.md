# 

Source: https://proofwiki.org/wiki/Image_of_Ultrafilter_is_Ultrafilter

Theorem
Let $X, Y$ be sets.
Let $f: X \to Y$ be a mapping.
Let $\FF$ be an ultrafilter on $X$.

Then the image filter $f \sqbrk \FF$ is an ultrafilter on $Y$.


Proof 1
From Image Filter is Filter, we have that $\FF$ is a filter on $Y$.
Let $\GG$ be a filter on $Y$ such that $f \sqbrk \FF \subseteq \GG$.
We have to show that $f \sqbrk \FF = \GG$.

Aiming for a contradiction, suppose there exists $U \in \GG$ such that $U \notin f \sqbrk \FF$.
By the definition of $f \sqbrk \FF$ this implies that $f^{-1} \sqbrk U \not \in \FF$.
By definition of ultrafilter:

$V := X \setminus f^{-1} \sqbrk U \in \FF$
Because $V \subseteq f^{-1} \sqbrk {f \sqbrk V}$ it follows that:

$f^{-1} \sqbrk {f \sqbrk V} \in \FF$
Thus also:

$f \sqbrk V \in f \sqbrk \FF$
By assumption we have:

$f \sqbrk \FF \subseteq \GG$
thus:

$f \sqbrk V \in \GG$
But:

$f \sqbrk V \cap U = f \sqbrk {X \setminus f^{-1} \sqbrk U} \cap U = \O \notin \GG$
Thus $\GG$ is not a filter, which is a contradiction to our assumptions.
Thus there can be no $U \in \GG$ such that $U \notin \FF$.
Therefore:

$f \sqbrk \FF = \GG$
Hence $f \sqbrk \FF$ is an ultrafilter.
$\blacksquare$


Proof 2
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





