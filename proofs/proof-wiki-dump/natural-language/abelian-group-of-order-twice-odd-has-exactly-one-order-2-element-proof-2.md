# 

Source: https://proofwiki.org/wiki/Abelian_Group_of_Order_Twice_Odd_has_Exactly_One_Order_2_Element/Proof_2

Theorem
Let $G$ be an abelian group whose identity element is $e$.
Let the order of $G$ be $2 n$ such that $n$ is odd.

Then there exists exactly one $g \in G$ with $g \ne e$ such that $g = g^{-1}$.


Proof
By Even Order Group has Order 2 Element, $G$ has an element $x$ of order $2$.
Aiming for a contradiction, suppose $y$ is another element of order $2$.
Then $x y = y x$ is another element of order $2$.
The subset $H = \set {g \in G: g^2 = e} = \set {e, x, y, x y}$ of $G$ forms a subgroup of $G$.
Thus $\order H = 4$.
But as $n$ is odd, it follows that $\order H$ is not a divisor of $2 n$.
This contradicts Lagrange's Theorem (Group Theory).
The result follows.
$\blacksquare$


Sources
Raoul (https://math.stackexchange.com/users/109289/raoul), Prove that an abelian group of order 2n contains precisely one element of order 2, URL (version: 2014-10-05): https://math.stackexchange.com/q/959613





