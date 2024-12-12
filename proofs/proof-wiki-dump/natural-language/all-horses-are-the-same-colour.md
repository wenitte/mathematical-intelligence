# 

Source: https://proofwiki.org/wiki/All_Horses_are_the_Same_Colour



Paradox
All horses are the same colour.


Reasoning
We prove this by induction on the number of horses in any given set of horses.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

For all sets of horses of size $n$, all $n$ horses in that set are the same colour.


Basis for the Induction
$\map P 1$ is true, as this just says:

In every set which consist of $1$ horse, each horse in that set is the same colour.
Every horse is the same colour as itself, so this is trivially true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

For all sets of horses of size $k$, all $k$ horses in that set are the same colour.
Then we need to show:

For all sets of horses of size $k + 1$, all $k + 1$ horses in that set are the same colour.


Induction Step
This is our induction step:
Let $S_{k + 1}$ be a set of $k + 1$ horses.
Let us number the horses $h_1, h_2, \ldots, h_{k + 1}$.
We define the subsets:

$T_a \subseteq S_{k + 1}: T_a = \set {h_1, h_2, \ldots, h_k}$
$T_b \subseteq S_{k + 1}: T_b = \set {h_2, h_3, \ldots, h_{k + 1} }$
Clearly, each of $T_a$ and $T_b$ have $k$ horses in them.
By the induction hypothesis, all the horses in $T_a$ are the same colour, and all the horses in $T_b$ are also all the same colour.
Now we consider the set $T_c$:

$T_c \subseteq S_{k + 1}: T_c = \set {h_2, h_3, \ldots, h_k}$
We see that $T_c$ contains horses in $T_a$ and also horses in $T_b$, and all the horses in $T_c$ are the same colour.
Now horses can't just change colour, so we are forced to the conclusion that all the horses in $T_a$ and all the horses in $T_b$ are all the same colour.
That must mean that all the horses in $S_{k + 1}$ are the same colour as well.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

For all $n \in \N$, for every set of $n$ horses, all the horses in that set are the same colour.
That is, all horses are the same colour.
$\blacksquare$


Resolution
This is a falsidical paradox.
The subset: 

$T_c \subseteq S_{k + 1}: T_c = \set {h_2, h_3, \ldots, h_k}$
has horses $h_1$ and $h_{k + 1}$ removed; this yields a set of cardinality two less than that of $S_{k + 1}$.
But if $S_{k + 1}$ has only $1$ element, $T_c$ would have $-1$ elements, an absurdity.
So the induction hypothesis can be applied only for $k \ge 2$, not for $k \ge 1$ as claimed.
However, since the basis for the induction dealt only with $k = 1$, the case for $k = 2$ needs to be addressed explicitly.  
If it were the case that all sets of $2$ horses were one-coloured, then the proof would hold.
But consider $T_a = \set {h_1}, T_b = \set {h_2}$.
Sure enough, all the horses in $T_a$ are all the same colour, and so are all the horses in $T_b$ all the same colour.
Defining $T_c$ as the set of horses $T_a$ and $T_b$ have in common, $T_c = \set {}$.
So there is nothing to suggest that all the horses in $T_a$ are the same colour as those in $T_b$.
$\blacksquare$


Also known as
This paradox is sometimes known as the horse paradox.

It is also seen otherwise presented, less colorfully (pun intended), as:

Any $n$ objects are equal to one another.
Its argument and resolution are the same.


Historical Note
The paradox All Horses are the Same Colour was originally raised by George Pólya, and appears in his $1954$ work Induction and Analogy in Mathematics.
It arose from the popular (at the time: the $1930$s) colloquialism:

That's a horse of a different color!
meaning:

That's unexpectedly new and different.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $2.1: \ 10$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: Exercises: $1.5$




