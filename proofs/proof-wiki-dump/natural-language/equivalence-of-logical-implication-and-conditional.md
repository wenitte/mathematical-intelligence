# 

Source: https://proofwiki.org/wiki/Equivalence_of_Logical_Implication_and_Conditional

Theorem
$\paren {p \implies q} \dashv \vdash \paren {p \vdash q}$
That is, the conditional is logically equivalent to logical implication.


Proof
This directly follows from:

The Modus Ponendo Ponens: $p \implies q, p \vdash q$
The Rule of Implication: $\left({p \vdash q}\right) \vdash p \implies q$.
$\blacksquare$


Caution
This is not to say that the conditional and the logical implication are the same thing.
If $p \not \vdash q$ it does not mean that $\neg \left({p \implies q}\right)$.
The latter statement is true only when $p$ is true and $q$ is false.
The former statement just says that it is not always true that when $p$ is true then $q$ is true.





