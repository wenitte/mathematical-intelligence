# 

Source: https://proofwiki.org/wiki/Open_Set_of_Irreducible_Space_is_Irreducible

Theorem
Let $T = \struct {S, \tau}$ be an irreducible topological space.
Let $U$ be a non-empty open set of $T$.

Then $U$ is irreducible in its induced subspace topology.


Proof
Let $T = \struct {S, \tau}$ be an irreducible topological space.
Let $U$ be a non-empty open set of $T$.
Aiming for a contradiction, suppose $U$ is not irreducible in $T$.
Then $U = V_1 \cup V_2$ for some closed sets $V_1$ and $V_2$ of $\struct {U, \tau_U}$.
By definition of subspace topology:

$V_1 = U \cap W_1$
and:

$V_2 = U \cap W_2$
for some closed sets $W_1$ and $W_2$ of $T$.
Because $W_1 = S \implies V_1 = U \cap W_1 = U$, it follows that:

$W_1 \ne S$
This is a contradiction, because $V_1$ is a proper subset of $U$.
Now $U \ne \O$ implies that $S \setminus U$ is a proper subset of $S$ which is a closed set of $T$.
Let $W_3 := W_2 \cup \paren {S \setminus U}$.
Then $W_3$ is a closed set of $T$.
Also, $W_3 \ne S$, because otherwise $V_2 = U \cap W_2 = U \cap W_3 = U$.
Thus $S = W_1 \cup W_3$ shows that $T$ is not irreducible.
The result follows by Proof by Contradiction.
$\blacksquare$


Also see
Space is Irreducible iff Open Sets are Connected
Closed Set of Ultraconnected Space is Ultraconnected




