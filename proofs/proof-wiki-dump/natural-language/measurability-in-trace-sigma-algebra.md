# 

Source: https://proofwiki.org/wiki/Measurability_in_Trace_Sigma-Algebra

Theorem
Let $\struct {A, \Sigma_A}$ and $\struct {C, \Sigma_C}$ be measurable spaces.
Let $B \subseteq C$. 
Let $\Sigma_B$ be the trace $\sigma$-algebra on $B$ induced by $\Sigma_C$. 
Let $f : A \to B$ be $\Sigma_A/\Sigma_B$-measurable.

Then $f$ is $\Sigma_A/\Sigma_C$-measurable. 


Proof
Let $S \in \Sigma_C$.
Since $f \sqbrk A \subseteq B$, we have $f^{-1} \sqbrk S = f^{-1} \sqbrk {S \cap B}$. 
From the definition of the trace $\sigma$-algebra, we have $S \cap B \in \Sigma_B$.
Since $f$ is $\Sigma_A/\Sigma_B$-measurable, we have $f^{-1} \sqbrk {S \cap B} \in \Sigma_A$.
Hence $f^{-1} \sqbrk S \in \Sigma_A$.
Hence we have shown that for all $S \in \Sigma_C$, $f^{-1} \sqbrk S \in \Sigma_A$.
Hence $f$ is $\Sigma_A/\Sigma_C$-measurable. 
$\blacksquare$





