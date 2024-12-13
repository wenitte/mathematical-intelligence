# 

Source: https://proofwiki.org/wiki/Open_Set_in_Quotient_Topological_Vector_Space



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.
Let $N$ be a linear subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\tau_N$ be the quotient topology on $X/N$.
Let $U \subseteq X/N$.

Then we have $U \in \tau_N$ if and only if there exists $V \in \tau$ such that $U = \pi \sqbrk V$. 


Proof
Necessary Condition
Suppose that $U \in \tau_N$.
From the definition of the quotient topology, $\pi^{-1} \sqbrk U \in \tau$. 
Let $V = \pi^{-1} \sqbrk U$. 
Since $\pi$ is surjective, we have $\pi \sqbrk {\pi^{-1} \sqbrk U} = U$ and so $U = \pi \sqbrk V$.
Hence we have shown that there exists $V \in \tau$ such that $U = \pi \sqbrk V$. 
$\Box$

Sufficient Condition
Suppose that there exists $V \in \tau$ such that $U = \pi \sqbrk V$.
From Quotient Mapping on Quotient Topological Vector Space is Open Mapping, we have that $\pi$ is an open mapping.
So $U \in \tau_N$ as the image of an open set under $\pi$.
$\blacksquare$





