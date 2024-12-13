# 

Source: https://proofwiki.org/wiki/Intersection_of_Chain_of_Prime_Ideals_of_Commutative_Ring_is_Prime_Ideal

Theorem
Let $R$ be a commutative ring.
Let $\Spec R$ be the spectrum of $R$, ordered by the subset relation.
Let $\set {P_\alpha}_{\alpha \mathop \in A}$ be a non-empty chain of prime ideals of $\Spec R$.
Let $\ds P = \bigcap_{\alpha \mathop \in A} P_\alpha$ be their intersection.

Then $P$ is a prime ideal of $R$.


Proof
By Intersection of Ring Ideals is Ideal, $P$ is an ideal of $R$.
We show that $P$ is prime.
Let $a, b\in R$ with $a, b \notin P$.
We show that $a b \notin P$.
Because $a \notin P$, there exists $\alpha \in A$ with $a \notin P_\alpha$.
Because $b \notin P$, there exists $\beta \in A$ with $b \notin P_\beta$.
Because $\set {P_\gamma}_{\gamma \mathop \in A}$ is totally ordered, $P_\alpha \subseteq P_\beta$ or $P_\beta \subseteq P_\alpha$.
Without loss of generality, we can assume $P_\alpha \subseteq P_\beta$, which gives us $a, b \notin P_\alpha$.
Since $P_\alpha$ is an prime ideal, $a b \notin P_\alpha$.
Thus $a b \notin P$.
$\blacksquare$


Also see
Union of Chain of Prime Ideals of Commutative Ring with Unity is Prime Ideal




