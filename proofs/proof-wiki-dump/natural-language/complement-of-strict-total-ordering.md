# 

Source: https://proofwiki.org/wiki/Complement_of_Strict_Total_Ordering



Theorem
Let $\struct {S, \prec}$ be a relational structure such that $\prec$ is a strict total ordering.
Then the complement of $\prec$ is a weak total ordering.


Proof
We need to show that $\nprec$ is a weak total ordering.
First we check in turn each of the criteria for an ordering:


Reflexivity
By Complement of Reflexive Relation, it follows directly that $\nprec$ is reflexive.


Transitivity
Let $a \nprec b$ and $b \nprec c$.
Now, suppose that $a \prec c$.
As $b \nprec c$, from the Trichotomy Law, one of the following is the case:

$b = c$ and so $a \prec b$;
$c \prec b$ and $a \prec b$ from transitivity of $\prec$.
Both are an immediate contradiction.
So $a \nprec c$ and so $\nprec$ is transitive.


Antisymmetry
Suppose $a \nprec b$.
Then from the Trichotomy Law, either $a = b$ or $b \prec a$.
Similarly, if $b \nprec a$ we have that either $a = b$ or $a \prec b$.
As $\prec$ is asymmetric, $b \prec a \iff \neg a \prec b$.
So if $a \nprec b$ and $b \nprec a$, it follows that $a = b$.
So $\nprec$ is antisymmetric.

The fact that $\nprec$ is connected follows directly from the Trichotomy Law.
$\blacksquare$





