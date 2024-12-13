# 

Source: https://proofwiki.org/wiki/Image_of_Ultrafilter_is_Ultrafilter/Proof_1

Theorem
Let $X, Y$ be sets.
Let $f: X \to Y$ be a mapping.
Let $\FF$ be an ultrafilter on $X$.

Then the image filter $f \sqbrk \FF$ is an ultrafilter on $Y$.


Proof
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





