# 

Source: https://proofwiki.org/wiki/Order_of_Boolean_Group_is_Power_of_2

Theorem
Let $G$ be a Boolean group.
Let $\order G$ denote the order of $G$.
Then:

$\order G = 2^n$
where $n \in \Z_{\ge 0}$ is a positive integer.


Proof
The case where $n = 0$ is clear:

$\order {\set e} = 1$
and $e^2 = e$.

Aiming for a contradiction, suppose $\order G = m \times 2^k$ for some odd integer $m$.
Then $m$ itself has an odd prime $p$ as a integer (which may of course equal $m$ if $m$ is itself prime).
Then by Cauchy's Lemma (Group Theory) there exists $g \in G$ such that $\order g = p$.
Hence it is not the case that $g^2 = e$.
Hence $\order G$ has no prime factor which is odd.
The result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $17$




