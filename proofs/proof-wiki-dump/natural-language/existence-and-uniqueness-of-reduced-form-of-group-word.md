# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Reduced_Form_of_Group_Word



Theorem
Let $X$ be a set.
Let $w$ be a group word on $X$.

Then $w$ has a unique reduced form.


Outline of proof
For existence, we proceed by induction on the length.
For uniqueness, we again proceed by induction on the length, by observing that two distinct elementary reductions have a common elementary reduction.


Proof
Existence
By induction on the length of $w$.


Basis for the induction
Let $w$ have length $0$.
Then $w$ is the empty word.
By Empty Group Word is Reduced, $w$ is reduced.


Induction step
Let $w$ have length $n \geq 1$.
If $w$ is reduced, we are done.
Otherwise, let $k \in \{1, \ldots, n-1\}$ be such that $w_{k+1} = w_k^{-1}$.
Then $w$ has an elementary reduction of length $n-2$.
By the induction hypothesis, $w$ has a reduction.
The result follows by induction.
$\Box$


Uniqueness
By induction on the length of $w$.


Basis for the induction
Let $w$ have length $0$.
By Length of Reduced Form of Group Word is at most Length of Word, a reduced form of $w$ must have length $0$.
Thus a reduced form of $w$ can only be $w$ itself.
$\Box$


Induction step
Let $w$ have length $n \geq 1$.
Let $u$ and $v$ be reduced forms of $w$.
Let $u_1$ and $v_1$ be elementary reductions of $w$ with reduced forms $u$ and $v$.
By Distinct Elementary Reductions of Group Word have Equal Elementary Reduction, there exists a word $t$ which is an elementary reduction of $u_1$ and $v_1$.
Let $s$ be a reduced form of $t$.
Then $s$ is a reduced form of $u_1$ and $v_1$.
By the induction hypothesis, $s=u=v$.
The result follows by induction.
$\blacksquare$





