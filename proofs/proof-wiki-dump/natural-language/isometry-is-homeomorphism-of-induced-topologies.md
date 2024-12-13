# 

Source: https://proofwiki.org/wiki/Isometry_is_Homeomorphism_of_Induced_Topologies

Theorem
Let $\struct {S_1, d_1}$ and $\struct {S_2, d_2}$ be metric spaces or pseudometric spaces.
Let $f: S_1 \to S_2$ be an isometry from $\struct {S_1, d_1}$ to $\struct {S_2, d_2}$.
Let $\tau_1$ and $\tau_2$ be the topologies induced on $S_1$ and $S_2$ by the metrics $d_1$ and $d_2$, respectively.

Then $f$ is a homeomorphism from $\struct {S_1, \tau_1}$ to $\struct {S_2, \tau_2}$.


Proof
By the definition of an isometry, $f$ is bijective.
By Continuous Mapping is Continuous on Induced Topological Spaces, $f$ is a continuous mapping from $\struct {S_1, \tau_1}$ to $\struct {S_2, \tau_2}$.


This article, or a section of it, needs explaining.In particular: It needs to be established that $f$ is continuous on the original metric spaces in the first place.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Inverse of Isometry of Metric Spaces is Isometry, $f^{-1}$ is an isometry.
By Continuous Mapping is Continuous on Induced Topological Spaces once more, $f^{-1}$ is a continuous mapping from $\struct {S_2, \tau_2}$ to $\struct {S_1, \tau_1}$.
Thus $f$ is a homeomorphism from $\struct {S_1, \tau_1}$ to $\struct {S_2, \tau_2}$.
$\blacksquare$





