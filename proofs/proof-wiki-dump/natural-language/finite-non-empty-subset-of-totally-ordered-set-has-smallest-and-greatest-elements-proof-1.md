# 

Source: https://proofwiki.org/wiki/Finite_Non-Empty_Subset_of_Totally_Ordered_Set_has_Smallest_and_Greatest_Elements/Proof_1

Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Then every finite $T$ such that $\O \subset T \subseteq S$ has both a smallest and a greatest element.


Proof
Let $A \subseteq \N_{>0}$ such that every $B \subseteq S$ such that $\card B = n$ has a greatest and a smallest element.

Any $B \subseteq S$ such that $\card B = 1$ has $1$ element, $b \in B$ say.
Then $b$ is both the greatest and smallest element of $B$.
So $1 \in A$.

Let $n \in A$.
Let $B \subseteq S$ such that $\card B = n + 1$.
Then $\exists b \in B$, and $\card {B \setminus \set b} = n$ elements by Cardinality Less One.
So, by the induction hypothesis, $B \setminus \set b$ has a greatest element $c$ and a smallest element $a$, as $n \in A$.
Note that $b \ne c$ as $c \in B \setminus \set b$ but $b \notin B \setminus \set b$.
We have that $\struct {S, \preceq}$ is a totally ordered set.
Hence by the Trichotomy Law, either $b \prec c$ or $c \prec b$ as $b \ne c$.
If $b \prec c$ then $c$ is the greatest element of $B$, otherwise it's $b$.
Similarly, either $b \prec a$ or $a \prec b$, and thus either $a$ or $b$ is the smallest element of $B$.
Either way, $B$ has both a greatest and a smallest element, and therefore $n + 1 \in A$.

Therefore, by the Principle of Mathematical Induction, $A = \N_{>0}$ and the proof is complete.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.9$




