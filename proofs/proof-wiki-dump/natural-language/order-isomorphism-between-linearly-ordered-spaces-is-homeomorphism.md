# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_between_Linearly_Ordered_Spaces_is_Homeomorphism

Theorem
Let $\struct {S_1, \le_1, \tau_1}$ and $\struct {S_2, \le_2, \tau_2}$ be linearly ordered spaces.
Let $\phi: S_1 \to S_2$ be an order isomorphism from $\struct {S_1, \le_1}$ to $\struct {S_2, \le_2}$.

Then $\phi$ is a homeomorphism from $\struct {S_1, \tau_1}$ to $\struct {S_2, \tau_2}$.


Proof
By the definition of order isomorphism, $\phi$ is a bijection.
Thus to show $\phi$ is a homeomorphism it remains to be shown that:

$\phi$ is continuous
and:

$\phi^{-1}$ is continuous.

First it is shown that $\phi^{-1}$ is continuous.
By Order Isomorphism Preserves Initial Segments and its dual, $\phi$ maps open rays in $\struct {S_1, \le_1}$ to open rays in $\struct {S_2, \le_2}$.
By Continuity Test using Sub-Basis, $\phi^{-1}$ is continuous.

Next it is shown that $\phi^{-1}$ is continuous.
By Inverse of Order Isomorphism is Order Isomorphism, $\phi^{-1}$ is an order isomorphism.
Applying the above shows that $\phi = \paren {\phi^{-1} }^{-1}$ is continuous.

Both $\phi$ and $\phi^{-1}$ have been shown to be continuous.
Thus, by definition, $\phi$ is a homeomorphism.
$\blacksquare$





