# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_Well-Orderable



Theorem
The set $\Q$ of rational numbers is well-orderable.


Proof 1
From Rational Numbers are Countably Infinite, $\Q$ is a countable set.
The result follows from Countable Set is Well-Orderable.
$\blacksquare$


Proof 2
The rational numbers are arranged thus:

$\dfrac 0 1, \dfrac 1 1, \dfrac {-1} 1, \dfrac 1 2, \dfrac {-1} 2, \dfrac 2 1, \dfrac {-2} 1, \dfrac 1 3, \dfrac 2 3,  \dfrac {-1} 3, \dfrac {-2} 3, \dfrac 3 1, \dfrac 3 2, \dfrac {-3} 1, \dfrac {-3} 2, \dfrac 1 4, \dfrac 3 4, \dfrac {-1} 4, \dfrac {-3} 4, \dfrac 4 1, \dfrac 4 3, \dfrac {-4} 1, \dfrac {-4} 3 \ldots$
It is clear that every rational number will appear somewhere in this list.
Thus it is possible to set up a bijection $f: \Q \to \N$ between each rational number and its position in the list, which is an element of $\N$.
We set up an ordering $\preccurlyeq$ defined as:

$\forall x, y \in \Q: x \preccurlyeq y \iff \map f x \le \map f y$
where $\le$ is the usual ordering on $\N$.
It remains to demonstrate that $\preccurlyeq$ is a well-ordering.


This needs considerable tedious hard slog to complete it.In particular: Tedious exercise of limited utility and maximum futilityTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Discussion




