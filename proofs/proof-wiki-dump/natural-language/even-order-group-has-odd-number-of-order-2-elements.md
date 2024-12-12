# 

Source: https://proofwiki.org/wiki/Even_Order_Group_has_Odd_Number_of_Order_2_Elements

Theorem
Let $G$ be a group whose identity is $e$.
Let $G$ be of even order.

Then $G$ has an odd number of elements of order $2$.


Proof
Let $S = \set {x \in G: \order x > 2}$ be the set of all elements of $G$ whose order is strictly greater than $2$.
Let $h \in S$.
Then from Order of Group Element equals Order of Inverse:

$h^{-1} \in S$.
Because $\order h > 2$ it follows that $h^{-1} \ne h$ by definition of self-inverse.
Thus every element in $S$ can be paired off with its inverse which is also in $S$.
It follows that $S$ has an even number of elements.
Thus $G \setminus S$ also contains an even number of elements.

From Identity is Only Group Element of Order 1, there is precisely $1$ element of $G$ whose order is less than $2$.
This leaves $G$ with an odd number of elements of order $2$.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: Examples: $(10)$




