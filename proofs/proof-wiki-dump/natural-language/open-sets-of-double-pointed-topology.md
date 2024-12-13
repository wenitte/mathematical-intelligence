# 

Source: https://proofwiki.org/wiki/Open_Sets_of_Double_Pointed_Topology

Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $D$ be a doubleton endowed with the indiscrete topology.
Let $\struct {S \times D, \tau}$ be the double pointed topology on $S$.

Then $X \subseteq S \times D$ is open in $\tau$ if and only if for some $U \in \tau$:

$X = U \times D$


Corollary
A subset $X \subseteq S \times D$ is closed in $\tau$ if and only if for some closed set $C$ of $\tau$:

$X = C \times D$


Proof
By definition, $\tau$ is the product topology on $X \times D$.
That is, $\tau$ has as a basis sets of the form:

$U \times V$
with $U \in \tau$ and $V$ open in $D$.

Since $D$ is endowed with the indiscrete topology, either $V = \O$ or $V = D$.
In the former case, by Cartesian Product is Empty iff Factor is Empty, $U \times V = \O$ for all $U \in \tau$.
In particular, then, it follows that $\tau$ has the basis:

$\BB = \set {U \times D: U \in \tau}$
since $U = \O \in \tau$, and so the basis elements with $V = \O$ are also accounted for.

It is therefore clear that all $U \times D$ with $U \in \tau$ are open in $\tau$.
That open sets of this form constitute all of $\tau$ amounts to showing that:

$\tau = \BB$
that is, that $\BB$ is already a topology on $S \times D$.


This needs considerable tedious hard slog to complete it.In particular: show this, maybe transfer/replace this result to/with general "Topology of Product with Indiscrete Space" or s.t. like thatTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$\blacksquare$





