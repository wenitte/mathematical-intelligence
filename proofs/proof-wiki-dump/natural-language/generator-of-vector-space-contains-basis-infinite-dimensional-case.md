# 

Source: https://proofwiki.org/wiki/Generator_of_Vector_Space_Contains_Basis/Infinite_Dimensional_Case

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $G$ be a generator of $X$.

Then: 

$G$ contains a basis for $X$.


Proof
If $X = \set { {\mathbf 0}_X}$, then we must have $G \subseteq \set { {\mathbf 0}_X}$, while the only basis for $X$ is $\O$.
So in this case, we have the claim immediately. 
Now take $X \ne \set { {\mathbf 0}_X}$. 
Let: 

$\SS = \set {L \subseteq G : L \text { is linearly independent} }$
Since $G$ generates $X$, it contains some $x \ne {\mathbf 0}_X$.
Then we have $\set x \in \SS$, so $\SS \ne \O$.
With view to apply Zorn's Lemma, we show that every non-empty $\subseteq$-chain in $\SS$ has an upper bound.
Let $\CC$ be a non-empty $\subseteq$-chain in $\SS$.
Let: 

$\ds C = \bigcup \CC$
Let $x_1, x_2, \ldots, x_n \in C$ and $\alpha_1, \alpha_2, \ldots, \alpha_n$ such that: 

$\ds \sum_{k \mathop = 1}^n \alpha_k x_k = 0$
For each $1 \le i \le n$, let $C_i \in \CC$ be such that $x_i \in C_i$. 
Since $\CC$ is a $\subseteq$-chain, there exists $1 \le j \le n$ such that: 

$C_i \subseteq C_j$ for all $1 \le i \le n$.
Then $x_i \in C_j$ for each $1 \le i \le n$. 
Since $C_j$ is linearly independent, we have: 

$\alpha_1 = \alpha_2 = \ldots = \alpha_n = 0$
So $C$ is linearly independent with $C \subseteq G$. 
So $C \in \SS$, while $F \subseteq C$ for all $F \in \CC$. 
So $C$ is an upper bound for $\CC$.
So every non-empty $\subseteq$-chain in $\SS$ has an upper bound.
So by Zorn's Lemma, $\SS$ has a $\subseteq$-maximal element $\BB$. 
We show that $\BB$ is a basis for $E$.
Let: 

$V = \map \span \BB$
Suppose that $V \ne X$.
We then have that $V$ cannot contain $G$, otherwise we would have $V = X$, since $G$ generates $X$. 
So there exists $y \in G$ such that $y \not \in V$.
From Vector not contained in Linear Span of Linearly Independent Set is Linearly Independent of Set, $\BB \cup \set y$ is linearly independent, contradicting the maximality of $\BB$.
So there exists no such $y$ and we have $V = X$.
Since $\BB$ is a linearly independent generator for $X$, it is a basis.
Since $\BB \in \SS$, we have $\BB \subseteq G$ as desired.
$\blacksquare$





