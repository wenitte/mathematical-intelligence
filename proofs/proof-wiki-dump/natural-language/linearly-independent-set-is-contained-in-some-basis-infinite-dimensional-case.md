# 

Source: https://proofwiki.org/wiki/Linearly_Independent_Set_is_Contained_in_some_Basis/Infinite_Dimensional_Case

Theorem
Let $K$ be a field. 
Let $E$ be a vector space over $K$. 
Let $H$ be a linearly independent subset of $E$.

There exists a basis $B$ for $E$ such that $H \subseteq B$.


Proof
Let: 

$\SS = \set {L \supseteq H : L \subseteq E \text { is linearly independent} }$
We have $H \in \SS$, so certainly $\SS \ne \O$.
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
So $C$ is linearly independent, with $H \subseteq \CC$. 
So $C \in \SS$, while $F \subseteq C$ for each $F \in \CC$.
So $C$ is an upper bound for $\CC$.
So every non-empty $\subseteq$-chain in $\SS$ has an upper bound.
So by Zorn's Lemma, $\SS$ has a $\subseteq$-maximal element $\BB$. 
We show that $\BB$ is a basis for $E$.
From definition 2 of a basis, it suffices to argue that $\BB$ is $\subseteq$-maximal among all linearly independent subsets of $G$. 
Suppose that $\BB'$ is a linearly independent subset of $G$ such that $\BB \subseteq \BB'$. 
Then since $H \subseteq \BB$, we have $H \subseteq \BB'$.
So $\BB' \in \SS$. 
So by the maximality of $\BB$ in $\SS$, we have $\BB = \BB'$.
So $\BB$ is $\subseteq$-maximal among all linearly independent subsets of $G$, and hence is a basis.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





