/**
 * Greenfinger
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:58 PM
 *
 */
define(['sf1','marionette'],
    function(sf1, Marionette){


        var indexView = Backbone.Marionette.CompositeView.extend({
                template:'#ComposerIndexTemplate'

            }
        );





        var indexDefaultLayout = Backbone.Marionette.Layout.extend({
            template:'#ComposerIndexLayoutTemplate',
            regions:{
                container:'.view-index'
            }

        });

        return {
            IndexView:indexView,
            IndexLayout:indexDefaultLayout

        };



    }
);