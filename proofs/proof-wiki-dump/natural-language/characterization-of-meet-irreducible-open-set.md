# 

Source: https://proofwiki.org/wiki/Characterization_of_Meet-Irreducible_Open_Set


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $W \in \tau$.

The following statements are equivalent::

$(1)\quad W$ is a meet-irreducible open set
$(2)\quad \forall U, V \in \tau : \paren {U \cap V = W \implies U = W \text { or } V = W}$
$(3)\quad \forall U, V \in \tau : \paren {U \cap V \subseteq W \implies U \subseteq W \text { or } V \subseteq W}$


Proof
By definition of meet-irreducible open set:

$W$ is meet-irreducible open set
if and only if:

$W$ is meet-irreducible in the frame $\struct {\tau, \subseteq}$

By definition of meet-irreducible:

$W$ is meet-irreducible in the frame $\struct {\tau, \subseteq}$
if and only if:

$\forall U, V \in \tau : \paren {U \cap V = W \implies U = W \text { or } V = W}$

From Prime Element iff Meet Irreducible in Distributive Lattice:

$W$ is meet-irreducible in the frame $\struct {\tau, \subseteq}$
if and only if:

$W$ is prime element in the frame $\struct {\tau, \subseteq}$

By definition of prime element:

$W$ is prime element in the frame $\struct {\tau, \subseteq}$
if and only if

$\forall U, V \in \tau : \paren {U \cap V \subseteq W \implies U \subseteq W \text { or } V \subseteq W}$

The result follows.
$\blacksquare$





