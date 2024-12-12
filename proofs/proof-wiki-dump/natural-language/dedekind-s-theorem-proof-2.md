# 

Source: https://proofwiki.org/wiki/Dedekind%27s_Theorem/Proof_2



Theorem
Let $\tuple {L, R}$ be a Dedekind cut of the set of real numbers $\R$.

Then there exists a unique real number which is a producer of $\tuple {L, R}$.


Proof
Proof of Uniqueness
Aiming for a contradiction, suppose both $\alpha$ and $\beta$ produce $\tuple {L, R}$.
By the Trichotomy Law for Real Numbers either $\beta < \alpha$ or $\alpha < \beta$.
Suppose that $\beta < \alpha$.
From Real Numbers are Densely Ordered, there exists at least one real number $c$ such that $\beta < c$ and $c < \alpha$.
Because $c < \alpha$, it must be the case that $c \in L$.
Because $\beta < c$, it must be the case that $c \in R$.
That is:

$c \in L \cap R$
But by the definition of Dedekind Cut, $\tuple {L, R}$ is a partition of $\R$.
That is, $L$ and $R$ are disjoint.
That is:

$L \cap R = \O$
This is a contradiction.
Similarly, $\alpha < \beta$ also leads to a contradiction.

It follows that $\alpha$ is unique.
$\Box$


Proof of Existence
Let $\alpha = \sup L$.
Let $u_1 \in \R$ such that $u_1 < \alpha$.
Aiming for a contradiction, suppose $u_1 \in R$.
Suppose there is no real number $s \in L$ such that $u_1 < s \le \alpha$.
Then $u_1$ would be an upper bound of $L$ which is less than $\sup {L}$.
This is a contradiction.
So there exists at least one real number $s \in L$ such that $u_1 < s \le \alpha$.
But this is also a contradiction because all the elements of $R$ are greater than all the elements of $L$.
It follows that $u_1 \in L$.

Let $u_2 \in \R$ such that $\alpha < u_2$.
Aiming for a contradiction, suppose $u_2 \in L$.
There exists $s' \in \R$ such that $\alpha < s' < u_2$.
But $s' \notin L$ and thus $s' \in R$.
This is a contradiction because all the elements of $R$ are greater than all the elements of $L$.
It follows that $u_2 \in R$.

Hence, $\alpha$ produces the cut $\tuple {L, R}$.
$\blacksquare$





