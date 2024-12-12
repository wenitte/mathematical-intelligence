# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Filter_on_Set



Theorem
The following definitions of the concept of Filter on Set are equivalent:

Definition 1
A set $\FF \subset \powerset S$ is a filter on $S$ if and only if $\FF$ satisfies the filter on set axioms:




\((\text F 1)\)  

$:$  







\(\ds S \in \FF \)   







  


\((\text F 2)\)  

$:$  







\(\ds \O \notin \FF \)   







  


\((\text F 3)\)  

$:$  







\(\ds U, V \in \FF \implies U \cap V \in \FF \)   







  


\((\text F 4)\)  

$:$  







\(\ds \forall U \in \FF: U \subseteq V \subseteq S \implies V \in \FF \)   







  



Definition 2
A set $\FF \subset \powerset S$ is a filter on $S$ if and only if $\FF$ satisfies the filter on set axioms:




\((\text F 1)\)  

$:$  







\(\ds S \in \FF \)   







  


\((\text F 2)\)  

$:$  







\(\ds \O \notin \FF \)   







  


\((\text F 3)\)  

$:$  







\(\ds \forall n \in \N: U_1, \ldots, U_n \in \FF \implies \bigcap_{i \mathop = 1}^n U_i \in \FF \)   







  


\((\text F 4)\)  

$:$  







\(\ds \forall U \in \FF: U \subseteq V \subseteq S \implies V \in \FF \)   







  



Proof
Conditions $(\text F 1)$, $(\text F 2)$ and $(\text F 4)$ are the same for both definitions.
It remains to establish that $(\text F 3)$ in Definition 1 is equivalent to $(\text F 3)$ in Definition 2.

$(1)$ implies $(2)$
Let $\FF$ be a filter on $S$ by definition $1$.
Then by definition:

$U_1, U_2 \in \FF \implies U_1 \cap U_2 \in \FF$
Suppose that for some $k \in \N$:

$(\text F 3): U_1, \ldots, U_k \in \FF \implies \ds \bigcap_{i \mathop = 1}^k U_i \in \FF$
Then we have:

$\ds \paren {\bigcap_{i \mathop = 1}^k U_i} \cap U_{k + 1} = \bigcap_{i \mathop = 1}^{k + 1} U_i$
by hypothesis.

Hence by induction:

$U_1, \ldots, U_k, U_{k + 1} \in \FF \implies \ds \bigcap_{i \mathop = 1}^{k + 1} U_i \in \FF$

Thus $\FF$ is a filter on $S$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\FF$ be a filter on $S$ by definition $2$.
Then by definition:

$(\text F 3): \forall n \in \N: U_1, \ldots, U_n \in \FF \implies \ds \bigcap_{i \mathop = 1}^n U_i \in \FF$
In particular when $n = 2$:

$U_1, U_2 \in \FF \implies U_1 \cap U_2 \in \FF$
Thus $\FF$ is a filter on $S$ by definition $1$.
$\blacksquare$





