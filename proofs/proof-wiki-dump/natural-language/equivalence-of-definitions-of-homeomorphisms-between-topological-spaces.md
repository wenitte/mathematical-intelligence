# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Homeomorphisms_between_Topological_Spaces



Theorem
Let $T_\alpha = \struct {S_\alpha, \tau_\alpha}$ and $T_\beta = \struct {S_\beta, \tau_\beta}$ be topological spaces.
Let $f: T_\alpha \to T_\beta$ be a bijection.

The following definitions of the concept of homeomorphism are equivalent:

Definition 1
$f$ is a homeomorphism if and only if both $f$ and $f^{-1}$ are continuous.


Definition 2
$f$ is a homeomorphism if and only if:

$\forall U \subseteq S_\alpha: U \in \tau_\alpha \iff f \sqbrk U \in \tau_\beta$


Definition 3
$f$ is a homeomorphism if and only if $f$ is both an open mapping and a continuous mapping.


Definition 4
$f$ is a homeomorphism if and only if $f$ is both a closed mapping and a continuous mapping.


Proof
Definition 1 iff Definition 2
Let $f$ and $f^{-1}$ both be continuous.
As $f$ is continuous, then by definition:

$V \in \tau_\beta \implies f^{-1} \sqbrk V \in \tau_\alpha$
and as $f^{-1}$ is continuous, then by definition:

$U \in \tau_\alpha \implies \paren {f^{-1} }^{-1} \sqbrk U = f \sqbrk U \in \tau_\beta$
That is:

$\forall U \subseteq S_\alpha: U \in \tau_\alpha \iff f \sqbrk U \in \tau_\beta$

Conversely, suppose that:

$\forall U \subseteq S_\alpha: U \in \tau_\alpha \iff f \sqbrk U \in \tau_\beta$
By definition:

$U \in \tau_\alpha \implies f \sqbrk U \in \tau_\beta$ if and only if $f^{-1}$ is continuous.
Also by definition:

$f \sqbrk U \in \tau_\beta \implies U = f^{-1} \sqbrk {f \sqbrk U} \in \tau_\alpha$ if and only if $f$ is continuous.
That is, both $f$ and $f^{-1}$ are continuous.
$\Box$


Definition 1 iff Definition 3
Let $f$ and $f^{-1}$ both be continuous.
Then by Bijection is Open iff Inverse is Continuous, $f$ is open.
Thus $f$ is both open and continuous.

Conversely, let $f$ be both open and continuous.
Then also by Bijection is Open iff Inverse is Continuous, $f^{-1}$ is continuous.
Thus both $f$ and $f^{-1}$ are continuous.
$\Box$


Definition 3 iff Definition 4
Let $f$ be both open and continuous.
Then by Bijection is Open iff Closed it follows that $f$ is both closed and continuous.

Conversely, let $f$ be both both closed and continuous.
Then also by Bijection is Open iff Closed it follows that $f$ is both open and continuous.
$\blacksquare$





