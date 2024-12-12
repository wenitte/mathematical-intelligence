# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Sequence_in_Topology



Theorem
The following definitions of the concept of Convergent Sequence/Topology are equivalent:

Definition 1
Then $\sequence {x_n}$ converges to the limit $\alpha \in S$ if and only if:

$\forall U \in \tau: \alpha \in U \implies \paren {\exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in U}$
Definition 2
Then $\sequence {x_n}$ converges to the limit $\alpha \in S$ if and only if:

$\forall U \in \tau: \alpha \in U \implies \set {n \in \N: x_n \notin U}$ is finite.


Proof
$(1)$ implies $(2)$
Suppose that $\alpha \in S$ has:

$\forall U \in \tau: \alpha \in U \implies \paren {\exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in U}$
Fix $U \in \tau$ with $\alpha \in U$. 
Then there exists $N \in \N$ such that $x_n \in U$ for $n > N$. 
So $x_n \not \in U$ for $n \in \N$ implies that $n \le N$.
That is: 

$\set {n \in \N : x_n \not \in U} \subseteq \set {n \in \N : n \le N}$
Since $\set {n \in \N : n \le N}$ is finite, it follows that $\set {n \in \N : x_n \not \in U}$ is finite from Subset of Finite Set is Finite.
$\Box$

$(2)$ implies $(1)$
Suppose that $\alpha \in S$ is such that: 

$\forall U \in \tau: \alpha \in U \implies \set {n \in \N: x_n \notin U}$ is finite.
Fix $U \in \tau$ with $\alpha \in U$. 
Then: 

$\set {n \in \N : x_n \notin U}$ is finite.
From Subset of Naturals is Finite iff Bounded, there exists $N \in \N$ such that: 

$\set {n \in \N : x_n \notin U} \subseteq \set {n \in \N : n \le N}$
So, if $n > N$, we must have $x_n \in U$. 
$\blacksquare$





