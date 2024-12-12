# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Extension



Theorem
Let $L / K$ be an algebraic field extension.

The following definitions of the concept of Normal Extension are equivalent:

Definition 1
Let $L / K$ be a field extension.
Then $L / K$ is a normal extension if and only if:

for every irreducible polynomial $f \in K \sqbrk x$ with at least one root in $L$, $f$ splits completely in $L$.


Definition 2
Let $L / K$ be a field extension.
Let $\overline K$ be the algebraic closure of $K$.
Let $\Gal {L / K}$ denote the set of embeddings of $L$ in $\overline K$ which fix $K$ pointwise.

Then $L / K$ is a normal extension if and only if:

$\map \sigma L = L$
for each $\sigma \in \Gal {L / K}$.


Proof
Definition $1$ implies Definition $2$
Let $\alpha \in L$ be an arbitrary element.
Let $\sigma: L \mapsto \overline K$ be an arbitrary embedding of $L$ fixing $K$.
We wish to show that $\sigma \left({\alpha}\right)\in L$.
Let $m_\alpha$ be the minimal polynomial of $\alpha$ over $K$, which exists because $L / K$ is algebraic.
Since $\sigma$ fixes $K$, $\sigma \left({\alpha}\right)$ must also be a root of $m_\alpha$.
By our assumption, $\alpha \in L$ implies that all roots of $m_\alpha$ are in $L$ and consequently $\sigma \left({\alpha}\right) \in L$.
$\Box$


Definition $2$ implies Definition $1$
Again, let $\alpha \in L$ and let $m_\alpha \in K \left[{x}\right]$ be its minimal polynomial over $K$.
We must show that for every root $\beta$ of $m_\alpha$, there exists an embedding $\sigma_\beta$, of $L$ in $\overline K$ such that $\sigma_\beta \left({\alpha}\right) = \beta$. 
Consider the intermediate field $K \left[{\alpha}\right]\subset L$.
By Abstract Model of Algebraic Extensions, we have an automorphism $\tau_\beta$ for each root $\beta$ of $m_\alpha$ such that $\tau_\beta \left({\alpha}\right) = \beta$ and $\tau_\beta$ fixes $K$
By Extension of Isomorphisms, each $\tau_\beta$ can be extended to an embedding $\sigma_\beta$ of $L$ in $\overline K$ such that:

$\sigma_\beta \restriction_{K \left[{\alpha}\right]} = \tau_\beta$
By our assumption, $\sigma_\beta \left({L}\right) = L$ for each $\beta$.
Consequently, every root of $m_\alpha$ is in $L$.
$\blacksquare$





