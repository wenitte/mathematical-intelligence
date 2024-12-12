# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Squares/Geometric_Proof_1



Theorem
$\forall x, y \in \R: x^2 - y^2 = \paren {x + y} \paren {x - y}$


Proof
In the words of Euclid:

If a straight line be cut into equal and unequal segments, the rectangle contained by the unequal segments of the whole together with the square on the straight line between the points of section is equal to the square on the half.
(The Elements: Book $\text{II}$: Proposition $5$)



Let $AB$ be cut into equal segments at $C$ and unequal segments at $D$.
Then the rectangle contained by $AD$ and $DB$ together with the square on $CD$ equals the square on $BC$.
(That is, let $x = AC, y = CD$. Then $\paren {x + y} \paren {x - y} + y^2 = x^2$.)

This is proved as follows.

Construct the square $CBFE$ on $CB$, and join $BE$.
Construct $DG$ parallel to $CE$ through $G$, and let $DG$ cross $BE$ at $H$.
Construct $KM$ parallel to $AB$ through $H$.
Construct $AK$ parallel to $BF$ through $A$.
From Complements of Parallelograms are Equal:

$\Box CDHL = \Box FGHM$.
Add the square $DBMH$ to each.
Then $\Box CBML = \Box DBFG$.
But as $AC = CB$, from Parallelograms with Equal Base and Same Height have Equal Area we have that:

$\Box ACLK = \Box CBML$
Add $\Box CDHL$ to each.
Then $\Box ADHK$ is equal in area to the gnomon $CBFGHL$.
But $\Box ADHK$ is the rectangle contained by $AD$ and $DB$, because $DB = DH$.
So the gnomon $CBFGHL$ is equal in area to the rectangle contained by $AD$ and $DB$.
Now $\Box LHGE$ is equal to the square on $CD$.
Add $\Box LHGE$ to each of the gnomon $CBFGHL$ and $\Box ADHK$.
Then the gnomon $CBFGHL$ together with $\Box LHGE$ equals the rectangle contained by $AD$ and $DB$ and the square on $CD$.
But the gnomon $CBFGHL$ together with $\Box LHGE$ is the square $CBFE$.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $5$ of Book $\text{II}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 1 (2nd ed.) ... (previous) ... (next): Book $\text{II}$. Propositions




