# 

Source: https://proofwiki.org/wiki/Intersection_Measures_preserve_Mutual_Singularity

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $A \in \Sigma$.
Let $\mu$ and $\nu$ be measures such that:

$\mu$ is mutually singular with respect to $\nu$.
Let $\mu_A$ be the intersection measure of $\mu$ with respect to $A$.

Then $\mu_A$ is mutually singular with respect to $\nu$.


Proof
Since $\mu$ is mutually singular with respect to $\nu$, there exists a $\nu$-null set $N$ such that $\map \mu {N^c} = 0$.
From Null Sets Closed under Subset, we have $\map \mu {A \cap N^c} = 0$.
Hence $\map {\mu_A} {N^c} = 0$. 
Hence $N$ is a $\nu$-null set such that $\map {\mu_A} {N^c} = 0$.
Hence $\mu_A$ is mutually singular with respect to $\nu$.
$\blacksquare$





