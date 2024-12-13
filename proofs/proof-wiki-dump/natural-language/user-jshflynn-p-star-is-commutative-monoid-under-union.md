# 

Source: https://proofwiki.org/wiki/User:Jshflynn/P-star_is_Commutative_Monoid_under_Union



Theorem
Let $\Sigma$ be an alphabet.
Let $\map \PP {\Sigma^*}$ be the $P$-star of $\Sigma$.
Then $\struct {\map \PP {\Sigma^*}, \cup}$ is a commutative monoid.


Proof
Closure
As: 

$V \subseteq \Sigma^* \land W \subseteq \Sigma^* \implies \paren {V \cup W} \subseteq \Sigma^*$
and:

$V, W \in \map \PP {\Sigma^*}$
we have that $\map \PP {\Sigma^*}$ is closed under $\cup$.
$\Box$


Associativity
Follows immediately from Union is Associative.
$\Box$


Identity
The empty language is a language over any alphabet and therefore is an element of $\map \PP {\Sigma^*}$. 
The empty language is equivalent to the empty set and for any set $X$: 
$X \cup \O = X$
So the empty language is the identity element.
$\Box$


Commutativity
Follows immediately from Union is Commutative.
$\Box$
Hence $\struct {\map \PP {\Sigma^*}, \cup}$ satisfies all the defining properties of a commutative monoid.
$\blacksquare$





