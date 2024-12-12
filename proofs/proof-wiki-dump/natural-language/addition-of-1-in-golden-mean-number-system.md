# 

Source: https://proofwiki.org/wiki/Addition_of_1_in_Golden_Mean_Number_System



Algorithm
Let $x \in \R$ be a real number.
The following algorithm performs the operation of addition of $1$ to $x$ in the golden mean number system.

Let $S$ be the representation of $x$ in the golden mean number system in its simplest form.


Step $1$: Is the digit immediately to the left of the radix point a zero?
If Yes, replace that $0$ with $1$. Go to Step $4$.
If No, set $m = 2$ and go to Step $2$.


Step $2$: Does the $m$th place after the radix point contain $0$?
If Yes, expand the $100$ in the $3$ places ending in the $m$th place with $011$. Subtract $2$ from $m$. Go to Step $3$.
If No, add $2$ to $m$. Repeat Step $2$.


Step $3$: Is $m = 0$?
If Yes, set the digit immediately to the left of the radix point from $0$ to $1$. Go to Step $4$.
If No, go to Step $2$.


Step $4$: Convert $S$ to its simplest form. Stop.


Proof
The above constitutes an algorithm, for the following reasons:


Finiteness
The only case in which it is possible for the process not to terminate is if the $m$th place never contains $0$.
This can only happen if $S$ ends in an infinite string $01010101 \ldots$
But if this is the case, $S$ is not in its simplest form.


Definiteness
Each step can be seen to be precisely defined.


Inputs
The only input to the algorithm is the representation $S$ of $x$.


Outputs
The only output from the algorithm is the representation $S$ of $x + 1$.
All operations that change $S$ are of the following nature:

$(1): \quad$ Simplification of $S$, which does not change $x$, which happens if at all in Step $4$.
$(2): \quad$ Expansion of $S$, which does not change $x$, which happens if at all in Step $2$.
$(3): \quad$ Setting the digit corresponding to $\phi^0$ to $1$ from $0$, which happens either in Step $1$ or in Step $3$.
In either step, it happens only once, after which the algorithm terminates.


Effective
Each step is basic enough to be done exactly and predictably.
$\blacksquare$


Sources
1957: George Bergman: Number System with an Irrational Base (Math. Mag. Vol. 31, no. 2: pp. 98 – 110)  www.jstor.org/stable/3029218




