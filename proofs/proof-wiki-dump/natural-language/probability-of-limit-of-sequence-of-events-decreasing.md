# 

Source: https://proofwiki.org/wiki/Probability_of_Limit_of_Sequence_of_Events/Decreasing

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\sequence {B_n}_{n \mathop \in \N}$ be a decreasing sequence of events.
Let $\ds B = \bigcap_{i \mathop \in \N} B_i$ be the limit of $\sequence {B_n}_{n \mathop \in \N}$.

Then:

$\ds \map \Pr B = \lim_{n \mathop \to \infty} \map \Pr {B_n}$


Proof

This article is complete as far as it goes, but it could do with expansion.In particular: The below needs to be done properly.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Set $A_i = \Omega \setminus B_i$ and then apply De Morgan's laws and the result for an increasing sequence of events.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.9$: Probability measures are continuous




