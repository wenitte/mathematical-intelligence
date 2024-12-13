# 

Source: https://proofwiki.org/wiki/Infinite_Ordinal_can_be_expressed_Uniquely_as_Sum_of_Limit_Ordinal_plus_Finite_Ordinal

Theorem
Let $x$ be an ordinal.
Suppose $x$ satisfies $\omega \subseteq x$.

Then $x$ has a unique representation as $\paren {y + z}$ where $y$ is a limit ordinal and $z$ is a finite ordinal.


Proof
Take $K_{II}$ to be the set of all limit ordinals.
Then set $y = \bigcup \set {w \in K_{II}: w \le x}$
The set $\set {w \in K_{II}: w \le x}$ is non-empty because $\omega \subseteq x$.
By Union of Ordinals is Least Upper Bound, $y \in K_{II}$ and $y \le x$.
By Ordinal Subtraction when Possible is Unique, there is a unique $z$ such that $x = \paren {y + z}$
Assume $\omega \le z$.
Then, again by Ordinal Subtraction when Possible is Unique:

$z = \paren {\omega + w}$
and so:














\(\ds x\)

\(=\)







\(\ds \paren {y + \paren {\omega + w} }\)





Equality is Transitive














\(\ds \)

\(=\)







\(\ds \paren {\paren {y + \omega} + w}\)





Ordinal Addition is Associative



But $y + \omega$ is a limit ordinal by Limit Ordinals Preserved Under Ordinal Addition:

$\O < \omega \implies y < y + \omega$
This contradicts the fact that $y$ is the largest limit ordinal smaller than $x$.
Therefore, $z \in \omega$.
Thus we have proven that such a selection of $y$ and $z$ exists.
Suppose $z$ and $w$ both satisfy:

$\paren {y + w} = \paren {y + z}$
By Ordinal Addition is Left Cancellable, we have $w = z$.
Thus $z$ is unique.

It remains to prove uniqueness for $y$.
Suppose that $x = \paren {y + u}$ and $x = \paren {w + z}$.
Without loss of generality, assume further that $y \le w$.
Then:














\(\ds y\)

\(\le\)







\(\ds w\)














\(\ds \leadsto \ \ \)

\(\ds \exists n: \, \)



\(\ds w\)

\(=\)







\(\ds \paren {y + n}\)





Ordinal Subtraction when Possible is Unique








\(\ds \leadsto \ \ \)





\(\ds \paren {y + u}\)

\(=\)







\(\ds \paren {\paren {y + n} + z}\)





Substitutivity of Equality








\(\ds \leadsto \ \ \)





\(\ds \paren {y + u}\)

\(=\)







\(\ds \paren {y + \paren {n + z} }\)





Ordinal Addition is Associative








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds \paren {n + z}\)





Ordinal Addition is Left Cancellable








\(\ds \leadsto \ \ \)





\(\ds \paren {n + z}\)

\(\in\)







\(\ds \omega\)





as $u \in \omega$








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\in\)







\(\ds \omega\)





Ordinal is Less than Sum








\(\ds \leadsto \ \ \)





\(\ds n\)

\(\notin\)







\(\ds K_{II}\)





as $\omega$ is the smallest limit ordinal








\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds \O\)





Definition of Limit Ordinal










\(\ds \exists m: \, \)

\(\, \ds \lor \, \)

\(\ds n\)

\(=\)







\(\ds m^+\)










Aiming for a contradiction, suppose that $\exists m: n = m^+$.














\(\ds n\)

\(=\)







\(\ds m^+\)














\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \paren {y + m^+}\)





Definition of $n$








\(\ds \leadsto \ \ \)





\(\ds w\)

\(=\)







\(\ds \paren {y + m}^+\)





Definition of Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds w\)

\(\notin\)







\(\ds K_{II}\)





Definition of Limit Ordinal



This is clearly a contradiction.
Hence:

$n = \O$
and so:

$w = y$
The result follows.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.13$




